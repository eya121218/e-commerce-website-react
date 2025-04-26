import React from 'react';
import './post-body.css'; // Import the CSS file
import flex1 from '../../assets/flex1.png';
import flex2 from '../../assets/flex2.jpg';
import flex3 from '../../assets/flex3.jpg';

const PostHeader: React.FC = () => {
    return (
        <div className="container">
            <img src={flex1} alt="Image 1" className="image"/>
            <img src={flex2}  alt="Image 2" className="image"/>
            <img src={flex3} alt="Image 3" className="image"/>
        </div>
    );
};

export default PostHeader;
