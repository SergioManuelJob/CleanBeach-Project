import './UserPage.scss'
import pfp from '../../../images/pexels-asad-photo-maldives-1450353.jpg'
import { BsPencilSquare } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const UserPage = () => {
    return(
        <>
        <div className="profile">
            <div>
            <img src={pfp} alt="pfpPicture" />
            <a href='https'><BsPencilSquare className='iconBs' /></a>
            </div>
        <h2>Name goes here</h2>
        <p>Joined: </p>
        <NavLink to="/admin"><button>ADMIN</button></NavLink>
        </div>

        <form>
        <div className="formular">
            <label htmlFor="events">Latest events joined</label>
            <input type="text" name="events" id="events" />
        </div>
        <div>
            <label htmlFor="rated">Beaches rated</label>
            <input type="text" name="rated" id="rated" />
        </div>
        <div>
            <label htmlFor="comment">Latest review</label>
            <textarea name="comment" id="comment" cols="48" rows="7"></textarea>
        </div>
        </form>
        </>
    )
}

export default UserPage