import React from 'react';
import './card.css'
import lock from '../assets/Lock_Icon.svg.png';


const Card = () => {
    return (
        <div className='unlock-card'>
            <div className="image-container">
                <img className="lock" src={lock} alt="lock" />
            </div>
            <div className="line"> </div>
            <h5>WILL UNLOCK SOON</h5>
        </div>
    )
};

export default Card;