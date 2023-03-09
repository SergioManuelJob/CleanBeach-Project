import './SignIn.scss'

const SignInPage = () => {
    return(
        <form>
        {/* SIGN IN */}
        <div>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        </div>
        <button>Log in</button>

        {/* REGISTER */}
        <div>
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
        </div>
        <button>Register</button>
        </form>
        )
}


export default SignInPage