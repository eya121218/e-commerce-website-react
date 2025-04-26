import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="/" className="footer-logo">Souilah Electronique</a>
                    <p className="footer-description">
                        Souilah Electronique est le plus ancien magasin d'électronique en Tunisie,
                        créé en 1967 par Mr Chedly Souilah.                    </p>
                </div>

                <div className="footer-links">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="/shop"> Modalités de livraison et de paiement</a></li>
                        <li><a href="/about">  Qui sommes-nous ?</a></li>
                        <li><a href="/faq">Contactez-nous</a></li>
                        <li><a href="/contact">Plan du site</a></li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <h4>Newsletter</h4>
                    <span>Vous pouvez vous désinscrire à tout moment. Vous trouverez pour cela nos informations de contact dans les conditions d'utilisation du site.</span>
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="votre addesse email"/>
                            <button type="submit" className="searchButton">
                                s'inscrire
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
            </div>
        </footer>
    );
};
