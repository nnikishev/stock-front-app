import { useState, useEffect } from "react"
import BasicNavbar from "../../navbar/navbar"
import ProductCard from "./children/ProductCard"
import './styles.css'

function GoodsLayout() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8090/api/settings/get_by_name/about/")
        .then((response) => response.json())
        .then((json) => setInfo(json))
    }, [])
    console.log(info)

    return ( <>
        <header className="App-header">
       <BasicNavbar />
        </header>
        <body>
            <h1 className="h1">Наша продукция:</h1>
            <div className="grid-container">
                
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div>
                <div className="card-item">
                  <ProductCard/>
                </div><div className="card-item">
                  <ProductCard/>
                </div>
            </div>

        </body>
        </>
    )
}

export default GoodsLayout