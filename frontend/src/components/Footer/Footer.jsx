import React from 'react';
import './Footer.scss';
import Copyright from '../../images/@copyright.png';
import Goals from '../../images/the goals.png';
import Facebook from '../../images/facebook 2.png';


const Footer=() => {
    return (
        <div className='footer'>
            <div className='footercontainer'>
                <img className='copyright' src={Copyright}></img>
                <img className='goals' src={Goals}></img>
                <img className='facebook' src={Facebook}></img>
            </div>
        </div>


    )
}

export default Footer;
