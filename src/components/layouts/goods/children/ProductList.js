import React, { useState } from 'react';
import { RangeSlider } from 'react-bootstrap-range-slider';
import ProductCard from './ProductCard';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'; // Import the CSS
import PriceFilterOffcanvas from './PriceFilterOffcanvas';
import { Button } from 'react-bootstrap';

const ProductList = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4); // Number of products per page
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000); // Set a default maximum price based on your product range
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);

    // Filter products based on the price range
    const filteredProducts = products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
    );

    // Pagination logic
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (<>
        <div className="container">
            <Button className="filter-button" variant="primary" onClick={handleShow}>
                Фильтры
            </Button>

            <PriceFilterOffcanvas 
                show={showOffcanvas} 
                handleClose={handleClose} 
                minPrice={minPrice} 
                setMinPrice={setMinPrice} 
                maxPrice={maxPrice} 
                setMaxPrice={setMaxPrice} 
            />

            <div>
                <p>Цена: {minPrice} - {maxPrice} P</p>
            </div>

            <div className="row">
                {currentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage <= 1 && 'disabled'}`}>
                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>
                            Пред
                        </button>
                    </li>
                    <li className={`page-item ${currentPage >= totalPages && 'disabled'}`}>
                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= totalPages}>
                            След
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
};

export default ProductList;