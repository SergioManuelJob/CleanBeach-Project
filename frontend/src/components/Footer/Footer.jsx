import React from 'react';
import './Footer.scss';
import Copyright from '../../images/@copyrightsvg.svg';
import Goals from '../../images/the goals.png';
import Facebook from '../../images/facebook 2.png';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footercontainer'>
                <img className='copyright' src={Copyright} alt="Copyright" />
                <img className='goals' src={Goals} alt="Goals" />
                <img className='facebook' src={Facebook} alt="Facebook-icon" />
            </div>
        </div>


    )
}

export default Footer;
