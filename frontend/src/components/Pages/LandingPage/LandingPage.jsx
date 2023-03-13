import { useState } from "react";
import Dropdown from '../../Dropdown/Dropdown';
import Cards from "../../Cards/Cards";

const LandingPage = () => {
    const [selected, setSelected] = useState('');
    <Dropdown selected={selected} setSelected={setSelected} />
    
    return (
        <>
           <Dropdown />
            <Cards />
        </>
        

    )
}

export default LandingPage
