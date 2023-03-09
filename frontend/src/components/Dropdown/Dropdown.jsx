import './Dropdown.scss';
import { useState } from 'react';
import {AiFillCaretDown} from 'react-icons/ai';

function Dropdown() {
    const[isActive, setIsActive] = useState(false);
    return(
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                Filter <AiFillCaretDown style={{ color: 'white' }}/>
            </div>
            {isActive && (
            <div className='dropdown-content'>
                <div className='dropdown-item'>Option1</div>
                <div className='dropdown-item'>Option2</div>
                <div className='dropdown-item'>Option3</div>
            </div>
           )}
        </div>
    )


}

export default Dropdown;