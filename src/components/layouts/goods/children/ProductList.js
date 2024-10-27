import React, { useState } from 'react';
import ProductCard from './ProductCard';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'; // Import the CSS
import PriceFilterOffcanvas from './PriceFilterOffcanvas';
import "../styles.css"
import { FaWindowClose } from "react-icons/fa";

const ProductList = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of products per page
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(65365); // Set a default maximum price based on your product range
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);

    const [selectedTags, setSelectedTags] = useState([]);
    const [tag, setTag] = useState([])

    const filteredProducts = products.filter(product => 
        product.price >= minPrice && product.price <= maxPrice
        && (tag.length === 0 || product.tags.some(ptag => tag.includes(ptag.title)))
    );
    const dropTag = (title) => {
        let wihout_tag = tag
        wihout_tag = wihout_tag.filter(item => item !== title)
        setTag(wihout_tag)
        setSelectedTags(selectedTags.filter(item => item !== title))
    }
        


    // Pagination logic
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (<>
        <div className="container">
            <button className="filter-button" variant="primary" onClick={handleShow}>
                Фильтры
            </button>

            <PriceFilterOffcanvas 
                show={showOffcanvas} 
                handleClose={handleClose} 
                minPrice={minPrice} 
                setMinPrice={setMinPrice} 
                maxPrice={maxPrice} 
                setMaxPrice={setMaxPrice}
                tag={tag}
                setTag={setTag}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
            />
            <div className='filters-status'>
            {/* <div className='used-filters' >
                <p className='used-filters-p'>Цена: {minPrice} - {maxPrice} P</p>
            </div> */}
            {tag.length > 0 && tag.map((t, key) =>( <div className='used-filters'>
                <p key={key} style={{dispaly: "flex"}}>{t} <FaWindowClose onClick={() => dropTag(t)} /> </p>
            </div>
            ))}
            </div>

            <div className="row">
                {currentProducts.map((product, index) => (
                    <ProductCard style={{ height: 'inherit'}} key={index} product={product} />
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
                    <li className={`page-item disabled'}`}>
                        <button className="page-link" disabled={true}>
                            Всего: {filteredProducts.length}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    );
};

export default ProductList;