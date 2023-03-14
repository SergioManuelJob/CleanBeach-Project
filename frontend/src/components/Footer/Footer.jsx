import React from 'react';
import './Footer.scss';
import Goals from '../../images/Un-world-goals.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';


const Footer=() => {
    return (
        <div className='footer'>
            <div className='footercontainer'>
                <p>©Copyright</p>
                <img className='goals' src={Goals} alt="Goals" />
                <div className='icons'>
                <a href="https://www.facebook.com/globalgoalsUN/"><FaFacebookSquare size={35} /></a>
                <a href="https://twitter.com/GlobalGoalsUN"><FaTwitterSquare size={35}/></a>
                <a href="https://www.instagram.com/theglobalgoals/?hl=da"><RiInstagramFill size={35} /></a>
                </div>
            </div>
        </div>


    )
}

export default Footer;
