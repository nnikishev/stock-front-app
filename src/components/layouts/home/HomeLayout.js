import ControlledCarousel from "../../carousel/Carousel"
import BasicNavbar from "../../navbar/navbar"


function HomeLayout() {


    return ( <>
        <header className="App-header">
       <BasicNavbar />
        </header>
        <>
            <ControlledCarousel />
        </>
        </>
    )
}

export default HomeLayout