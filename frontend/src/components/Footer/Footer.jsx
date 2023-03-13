import React from 'react';
import './Footer.scss';
import Goals from '../../images/Un-world-goals.png';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footercontainer'>
                <p>©Copyright</p>
                <img className='goals' src={Goals} alt="Goals" />
                <div className='icons'>
                <BsFacebook size={50} />
                <AiFillTwitterCircle size={50}/>
                <AiFillInstagram size={50} />
                </div>
            </div>
        </div>


    )
}

export default Footer;
