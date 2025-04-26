import React from 'react';
import './products.css';

type ProductProps = {
    name: string;
    description: string;
    price: number;
    image: string;
};

export const Products: React.FC<ProductProps> = ({name, description, price, image}) => {
    return (
        <div className="product-card">
            <div className="badge">Hot</div>
            <div className="product-tumb">
                <img src={image} alt={name}/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p>{description}</p>
                <div className="product-bottom-details">
                    <div className="product-price">
                        {price}TND
                    </div>
                    <div className="product-links">
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
