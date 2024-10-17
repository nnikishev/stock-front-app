import { useState, useEffect } from "react"
import BasicNavbar from "../../navbar/navbar"
import './styles.css'
import ProductList from "./children/ProductList"
import Spinner from 'react-bootstrap/Spinner';


function GoodsLayout() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://194.87.213.123:8000/api/products/');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data); // Set the products state
                console.log(data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div><Spinner animation="border" /></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return ( <>
        <header className="App-header">
       <BasicNavbar />
        </header>
        <div className="App">
            <h1></h1>
            <ProductList products={products} />
        </div>
        </>
    )
}

export default GoodsLayout