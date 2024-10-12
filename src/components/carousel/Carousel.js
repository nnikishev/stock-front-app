import { useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/carousel-items/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []) 
  console.debug(items)

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return ( <div className='carousel-div'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {items.map((item, index) => (
        <Carousel.Item key={index}>
            <img src={item.image}/>
            <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            </Carousel.Caption>
        </Carousel.Item>)
    )}
    </Carousel>
    </div>
  );
}
};

export default ControlledCarousel;