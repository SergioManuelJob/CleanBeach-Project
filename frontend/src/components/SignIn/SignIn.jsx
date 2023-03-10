import './SignIn.scss'

const SignInPage = () => {
    return(
<form>
    <div>
        {/* SIGN IN */}
        <div>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <button>Log in</button>
        </div>

        {/* REGISTER */}
        <div className='register'>
        <label htmlFor="fullname">Full name</label>
        <input name="fullname" type="text" />
        </div>

        <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        </div>

        <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <button>Register</button>
        </div>

    </div>
</form>

        )
}


export default SignInPage