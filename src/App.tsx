import React from 'react';
import './App.css';
import {products, products2} from "./services/data";
import { Header } from "./components/header/header";
import { ProductCard } from "./components/productCard/product-card";
import Carousel from "./components/carousel/carousel";
import carousel2 from './assets/carousel2.jpg';
import carousel3 from './assets/carousel1.jpg';
import carousel4 from './assets/carousel4.jpg';
import {Footer} from "./components/footer/footer";
import PostHeader from "./components/post-header/post-header";
import PostBody from "./components/body/post-body";
import {Products} from "./components/horizental-product/products";

function App() {

    const images = [
        carousel2,
        carousel3,
        carousel4,
    ];
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div>
                <PostHeader />
            </div>
            <div className="carousel">
                <Carousel images={images} />
            </div>
            <div>
            <PostBody />
        </div>
            <div className="card-right-title">
                Nos produits
            </div>
            <div className="thin-border"></div>

            <div className="products-container">
                {products.map((product) => (
                    <ProductCard
                        price={product.price}
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
            <div className="card-right-title">
                Notre Sélection
            </div>
            <div className="thin-border"></div>
            <div className="products-container">
                {products2.map((product) => (
                    <Products
                        price={product.price}
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>

    );
}

export default App;
