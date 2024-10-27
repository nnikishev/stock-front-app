import { useNavigate } from "react-router-dom";
import React from 'react';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();


    const toItemDesc = () => {
        navigate(product.uuid)
    }
    return (
        <div className="col-md-3 mb-4">
            <div className="card-item" onClick={() => toItemDesc()}>
                <img src={product.attachments[0]} className="card-img-top" alt={product.name} />
                <div className="card-list-body">
                    <br />
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description.slice(0, 100)}...</p>
                    <br />
                    {/* <p className="font-weight-bold">Цена: {product.price} Р</p> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;