import './UpdatePage.scss'
import pfp from '../../../images/pexels-asad-photo-maldives-1450353.jpg'
import { AiOutlinePlus } from 'react-icons/ai'

const UpdatePage = () => {
    return(
        <>
        <div className='profile'>
        <div>
        <img src={pfp} alt="pfppicture" />
        <a href='https'> <AiOutlinePlus className='plus' /></a>
        </div>
        </div>

        <form>
        <div className="update">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
        </div>
        <div>
            <label htmlFor="password">New Password</label>
            <input type="password" name="password" id="password" />
        </div>
        <div>
            <label htmlFor="password">Old Password</label>
            <input type="password" name="password" id="password" />
            <button>Update</button>
        </div>
        </form>
        </>
    )
}

export default UpdatePage