import { useState, useEffect } from "react"
import BasicNavbar from "../../navbar/navbar"
import ContactForm from "./children/ContactUsForm"
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import './style.css'
import image from './image.png'
import ContactUsModal from "./children/ContactUsModal";


function AboutLayout() {
    const [modalShow, setModalShow] = useState(false);
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://194.87.213.123:8000/api/settings/get_by_name/about/")
        .then((response) => response.json())
        .then((json) => setInfo(json))
    }, [])

    return ( <>
        <header className="App-header">
            <BasicNavbar />
        </header>
        <body>
            <div className="about">
                <div className="about">

                    {info.additional && <>
                            <p>{info.value}</p>
                            <p className="contacts-group"> <BsFillPhoneVibrateFill/> {info.additional.phone}</p> 
                            <p className="contacts-group"> <FaMailBulk/> {info.additional.email}</p>
                           </>
                           }
                </div>
            </div>
            
            <div className="about-contact-us">
                <div className="map">
                    <h3>Мы на карте</h3>
                <img className="map-image" src={image}></img>
                </div>
                <button onClick={() => setModalShow(true)}>Связаться с нами</button>
                <ContactUsModal 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
          
        </body>
        </>
    )
}

export default AboutLayout