import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import { Carousel } from 'react-bootstrap';

// ImageGallery Component for displaying images
const ImageGallery = ({ images }) => {
    return (
        <div className='product-carousel'>
        <Carousel className="product-desc-images" slide={false}>
        {images.map((image, index) => (
            <Carousel.Item key={index}>
                <img src={image} ></img>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
        </Carousel>
        </div>
    );
};

const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <h2 className="card-title">{product.name}</h2>
            <div className="card-body">
                <ImageGallery images={product.attachments} />
                <div>
                <p className="card-text">{product.description}</p>
                {product.properties && <>
                <h5>Характеристики:</h5>
                <ul className='product-stats-list'>
                    {Object.entries(product.properties).map(([key, value], index) => (
                        <li className='product-stats' key={index}><strong>{key}</strong> {value}</li>
                    ))}
                </ul>
                {/* <p className="font-weight-bold">Цена: {product.price} Р</p> */}
                </>}
                </div>
            </div>
        </div>
    );
};

// PropTypes for type-checking
ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        attachments: PropTypes.arrayOf(PropTypes.string).isRequired,
        properties: PropTypes.object,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductCard;