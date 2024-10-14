import { useState, useEffect } from "react"
import BasicNavbar from "../../navbar/navbar"
import ContactForm from "./children/ContactUsForm"
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { YMaps, Map, FullscreenControl, TypeSelector, Placemark } from '@pbe/react-yandex-maps';
import './style.css'
import image from './image.png'


function AboutLayout() {
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
                <div className="contacts">
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
                {info.additional && <>
                <img className="map-image" src={image}></img>
                    {/* <YMaps >
                        <Map
                            width={'inherit'}
                            height={'inherit'}
                            defaultState={{ center: info.additional.map, zoom: 16 }}
                        >
                        <Placemark geometry={info.additional.map} />
                        <TypeSelector options={{ float: "right" }} />
                        <FullscreenControl /> 
                        </Map>
                    </YMaps> */}
                    </>}
                </div>
                    <ContactForm />
            </div>
          
        </body>
        </>
    )
}

export default AboutLayout