import BasicNavbar from "../../navbar/navbar"
import AccordionFeedbacks from "./children/AccordionFeedbacks"
import './styles.css'


function FeedbackLayout() {


    return ( <>
        <header className="App-header">
            <BasicNavbar />
        </header>
        <body>
            <div className="feedbacks">
                <AccordionFeedbacks />
            </div>       
        </body>
        </>
    )
}

export default FeedbackLayout