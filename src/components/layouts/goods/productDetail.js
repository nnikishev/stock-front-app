import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import BasicNavbar from "../../navbar/navbar";
import ProductCard from "./children/ProductDesc";

function ProductDetail () {
    const { uuid } = useParams()
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                var url = String("http://194.87.213.123:8000/api/product/" + uuid + "")
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data); // Set the products state
                console.log(data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, []);

    return ( <>
        <header className="App-header">
            <BasicNavbar />
        </header>
        <div className="App"> 
            {product && <ProductCard product={product}/> }
            
        </div>
        </>
    )
}

export default ProductDetail;