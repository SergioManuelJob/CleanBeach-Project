import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../images/Logo.png';


function Navbar() {

    let button;
    if(localStorage.getItem("user") != undefined)(
        button = <li><NavLink to="/profile">Profile</NavLink></li>
    )
    else{
        button = <li><NavLink to="/signup">Sign Up</NavLink></li>
    }

    return(
        <header>
            <NavLink to="/" >
            <img className='logo' src={Logo} alt='Logo' />
            </NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    {button}
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;