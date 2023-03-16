import './UserPage.scss'
import pfp from '../../../images/pexels-asad-photo-maldives-1450353.jpg'
import { BsPencilSquare } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';



const UserPage = () => {

    const [data, setData] = useState({});
    let admin; 

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"));
        setData(data)
    }, []);

    if(data.isAdmin)(
        admin = <NavLink to="/admin"><button>ADMIN</button></NavLink>
    )

    return(
        
        <>
        <div className="profile">
            <div>
            <img src={pfp} alt="pfpPicture" />
            <NavLink to="/update">
            <p><BsPencilSquare className='iconBs' size={22} /></p>
            </NavLink>
            </div>
        <h2>{data.name}</h2>
        <p>Joined: </p>
        {admin}
        </div>

        <form className='form2'>
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