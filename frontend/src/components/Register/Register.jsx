import './Register.scss'
import { useState, useEffect } from 'react';
import Cleaning1 from '../../images/Rectangle 39.png';

const Register = () => {
    const initialValues = { fullname: '', email: '', password: ''};
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
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;;
        if (!values.fullname) {
            errors.fullname = 'Full name is required!';
        }

        if (!values.email) {
            errors.email = "Email is required!";
          } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
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
            <div style={{color: 'green', fontSize: '40px'}} className='ui message success'>Registered successfully</div>
    ) : null}
    <div className='container'>
        {/* REGISTER */}
        <div className='register'>
        <h1 className='h1ss'>Register</h1>
        <label htmlFor="fullname">Full name</label>
        <input name="fullname" type="text" value={formValues.fullname}
        onChange={handleChange}/>
        <p style={{color: 'red'}}>{formErrors.fullname}</p>
        
        <label htmlFor="email">E-mail</label>
        <input name="email" type="email" value={formValues.email}
        onChange={handleChange}/>
        <p style={{color: 'red'}}>{formErrors.email}</p>

        <label htmlFor="password">Password</label>
        <input name="password" type="password" value={formValues.password}
        onChange={handleChange} />

        <p style={{color: 'red'}}>{formErrors.password}</p>
        <div className='member'>Already have an account? <span>Sign In</span></div>

        <button>Register</button>
        </div>
        <img className='cleaning1' src={Cleaning1} alt="My Image" />

    </div>
</form>

        )
}


export default Register