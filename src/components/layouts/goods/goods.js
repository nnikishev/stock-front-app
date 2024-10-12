import { useState, useEffect } from "react"
import BasicNavbar from "../../navbar/navbar"
import ProductCard from "./children/ProductCard"
import './styles.css'

function GoodsLayout() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/settings/get_by_name/about/")
        .then((response) => response.json())
        .then((json) => setInfo(json))
    }, [])
    console.log(info)

    return ( <>
        <header className="App-header">
       <BasicNavbar />
        </header>
        <body>
            <div className="cards-grid">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>

        </body>
        </>
    )
}

export default GoodsLayout