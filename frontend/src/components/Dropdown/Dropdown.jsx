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
                <div className='dropdown-item'>Least trash</div>
                <div className='dropdown-item'>Most popular</div>
                <div className='dropdown-item'>Near you</div>
            </div>
           )}
        </div>
    )


}

export default Dropdown;