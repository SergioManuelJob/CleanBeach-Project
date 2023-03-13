import { NavLink } from 'react-router-dom';
import './Navbar.scss';


function Navbar() {
    return(
        <header>
            <h3><NavLink to="/">Logo</NavLink></h3>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                </ul>

            </nav>
        </header>
    );
}

export default Navbar;