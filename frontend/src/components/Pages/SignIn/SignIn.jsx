import './SignIn.scss'
import { useState, useEffect } from 'react';
import Cleaning from '../../../images/Rectangle 37.png';

const SignInPage = () => {
    const initialValues = { username: '', password: ''};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex =
        /^[a-zA-Z0-9_-]{3,16}$/;
        if (!values.username) {
            errors.username = 'Username is required!';
            
        }
        if (!values.password) {
            errors.password = 'Password is required!';
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
          } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
          }
        return errors;

    };

    return(

<form className='form' onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div style={{color: 'green', fontSize: '40px'}} className='ui message success'>Signed in successfully</div>
    ) : null}
    <div className='containerss'>
        {/* SIGN IN */}
        <div className='signin'>
        <h1 className='h1ss'>Sign In</h1>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" value={formValues.username}
        onChange={handleChange}/>
        <p style={{color: 'red'}}>{formErrors.username}</p>

        <label htmlFor="password">Password</label>
        <input name="password" type="password" value={formValues.password}
        onChange={handleChange}/>
        <p style={{color: 'red'}}>{formErrors.password}</p>
        <div className='notAMember'>Don't have an account? <span>Register</span></div>

        <button>Log in</button>
        </div>
        <img className='cleaning' src={Cleaning} alt="My Image" />

    </div>
</form>

        )
}


export default SignInPage