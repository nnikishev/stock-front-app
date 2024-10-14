import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card-item">
                <img src={product.attachments[0]} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="font-weight-bold">Цена: {product.price} Р</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;