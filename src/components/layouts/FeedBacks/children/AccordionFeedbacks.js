import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { format, parseISO } from 'date-fns';
import { ru } from "date-fns/locale";

function AccordionFeedbacks() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const locales = { ru };
    const prettifyTime = (date) => {
        return format(date, ' d MMMM yyyy HH:mm:ss', {
            locale: locales["ru"], // or global.__localeId__
          });
    }
    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const response = await fetch('http://194.87.213.123:8000/api/feedbacks/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFeedbacks(data); // Set the products state
                console.log(data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchFeedbacks();
    }, []);

    if (loading) {
        return <div><Spinner animation="border" /></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    console.log(feedbacks)

  return (
    <Accordion>
        {feedbacks.map((feedback, index) => (
            <Accordion.Item eventKey={index}>
                <Accordion.Header>
                    {prettifyTime(feedback.created_at)} / 
                    {feedback.fio}/
                    {feedback.phone}
                    </Accordion.Header>
                <Accordion.Body>
                    {feedback.message}
                </Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
  );
}

export default AccordionFeedbacks;