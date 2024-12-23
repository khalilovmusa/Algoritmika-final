import "./Login.css";

const Login = () => {
    return(
        <div className="login-wrapper">
            <h1 className="admin-header">Admin Page</h1>
            <div className="login-input-wrapper">
                <label htmlFor="login">Login</label>
                <input name="login" className="login-input" />
                <label htmlFor="password">Password</label>
                <input name="password" className="password-input" />
                <button className="sign-in-btn">Sign In</button>
            </div>
            
        </div>
    )
}

export default Login;