import './UpdatePage.scss'
import pfp from '../../../images/pexels-asad-photo-maldives-1450353.jpg'
import { useState, useEffect } from 'react';
import userService from '../../../services/userService';
import { AiOutlinePlus } from 'react-icons/ai'

const UpdatePage = () => {

    const initialValues = { username: '', password: '', password2: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("user"))
        console.log(userData)
        console.log(formValues)
        userService.updateUser(formValues.username, formValues.password, userData.uid, userData.access_token)
            .then(data => {
                console.log(data)
                userData.name = data.data.name
                localStorage.setItem("user", JSON.stringify(userData))
                setIsSubmit(true);
            })
            .catch(err => {
                setIsSubmit(false);
                console.log(err);
            })
    };

    return(
        <>
        <div className='profile'>
        <div>
        <img src={pfp} alt="pfppicture" />
        </div>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="update">
            <label htmlFor="username">Username</label>
            <input name="username" type="text" value={formValues.username}
            onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="password">New Password</label>
            <input name="password" type="password" value={formValues.password}
            onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="password2">Old Password</label>
            <input name="password2" type="password" value={formValues.password2}
            onChange={handleChange}/>
            <button>Update</button>
        </div>
        </form>
        </>
    )
}

export default UpdatePage