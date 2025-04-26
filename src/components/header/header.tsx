
import React from "react";
import "./header.css";
import logo from '../../assets/logo.jpg';
import  contact  from '../../assets/contactus.png';
import  iconCart  from '../../assets/icons8-cart-80.png';

export const Header = () => {
    return (
        <header>
            <section>
                <div id="container">
                    <div id="shopName">
                        <img src={logo} alt="logo" />
                    </div>
                    <div id="search">
                        <i className="fas fa-search search"></i>
                        <input
                            type="text"
                            id="input"
                            name="searchBox"
                            placeholder="Search for new products"
                        />
                    </div>

                    <div id="collection">
                        <div id="clothing">
                            <div className="top-line">
                                <img src={contact} alt="Contact Icon"/>
                                <span className="span-color">appelez nous</span>
                            </div>
                            <div className="phone-number">
                                (+216) 71 259 856
                            </div>
                        </div>
                    </div>


                    <div id="user">
                        <a href="/cart">
                            <i className="fas fa-shopping-cart addedToCart">
                                <img src={iconCart} alt="Contact Icon"/>
                                <div id="badge">0</div>
                            </i>
                        </a>
                        <a href="/profile">
                            <i className="fas fa-user-circle userIcon"></i>
                        </a>
                    </div>

                </div>
            </section>
        </header>
    );
};
