import { useState } from "react";
import Dropdown from '../../Dropdown/Dropdown';
import Cards from "../../Cards/Cards";
import Image from '../../../images/pexels-asad-photo-maldives-1450353.jpg';
import { AboutUs, VolunteerText } from "../../VolunteerText/VolunteerText";
import WelcomeText from "../../WelcomeText/WelcomeText";
import './LandingPage.scss'

const LandingPage = () => {
    const [selected, setSelected] = useState('');
    <Dropdown selected={selected} setSelected={setSelected} />
    
    return (
        <>
            <WelcomeText className="WelcomeText" />
            <img className='beachimg' src={Image} alt="Beach" />
            <Dropdown />
            <Cards />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7FD4D1" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,192C384,171,480,85,576,58.7C672,32,768,64,864,112C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <AboutUs />
            <VolunteerText />
        </>
        

    )
}

export default LandingPage
