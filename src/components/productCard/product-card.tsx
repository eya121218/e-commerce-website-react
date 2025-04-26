// import React from 'react';
// import './product-card.css';
//
// type ProductProps = {
//     name: string;
//     category: string;
//     description: string;
//     price: number;
//     oldPrice: number;
//     image: string;
// };
//
// export const ProductCard: React.FC<ProductProps> = ({name, category, description, price, oldPrice, image}) => {
//     return (
//         <div className="product-card">
//             <div className="badge">Hot</div>
//             <div className="product-tumb">
//                 <img src={image} alt={name}/>
//             </div>
//             <div className="product-details">
//                 <span className="product-catagory">{category}</span>
//                 <h4>{name}</h4>
//                 <p>{description}</p>
//                 <div className="product-bottom-details">
//                     <div className="product-price">
//                         <small>${oldPrice}</small>${price}
//                     </div>
//                     <div className="product-links">
//                         <i className="fa fa-heart"></i>
//                         <i className="fa fa-shopping-cart"></i>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
import React from 'react';
import './product-card.css';

type ProductProps = {
    price: number;
    name: string;
    description: string;
    image: string;
};

export const ProductCard: React.FC<ProductProps> = ({ name, description, image, price }) => {
    return (

        <div className="card">
            <img className="card-image" src={image} alt={name}/>
            <div className="card-content">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
            </div>
        </div>
    );
};
