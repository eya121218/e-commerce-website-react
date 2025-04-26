import React from 'react';
import './post-header.css'; // Import the CSS file

const PostHeader: React.FC = () => {
    return (
        <nav className="post-header-nav">
            <ul className="post-header-ul">
                <li className="post-header-li">
                    <div className="post-header-link">Nos produits</div>
                </li>
                <li className="post-header-li">
                    <div className="post-header-link">Acceuil</div>
                </li>

                <li className="post-header-li">
                    <div className="post-header-link">Nouveaux produits</div>
                </li>

                <li className="post-header-li">
                    <div className="post-header-link">Meilleurs ventes</div>
                </li>

                <li className="post-header-li">
                    <div className="post-header-link">Qui sommes-nous?</div>
                </li>

                <li className="post-header-li">
                    <div className="post-header-link">Contact</div>
                </li>

            </ul>
        </nav>
    );
};

export default PostHeader;
