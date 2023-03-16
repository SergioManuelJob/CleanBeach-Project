import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../images/Logo.png';
import { BiLogOut } from 'react-icons/bi';


function Navbar() {
    return(
        <header>
            <NavLink to="/" >
            <img className='logo' src={Logo} alt='Logo' />
            </NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/profile"><BiLogOut/></NavLink></li>

                </ul>

            </nav>
        </header>
    );
}

export default Navbar;