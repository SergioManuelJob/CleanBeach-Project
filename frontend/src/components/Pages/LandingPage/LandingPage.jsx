import { useState } from "react";
import Dropdown from '../../Dropdown/Dropdown';

const LandingPage = () => {
    const [selected, setSelected] = useState('');
    <Dropdown selected={selected} setSelected={setSelected} />
    
    return (
        <Dropdown />
        
    )
}

export default LandingPage
