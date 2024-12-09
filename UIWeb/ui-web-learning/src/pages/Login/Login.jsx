import React from "react";

import "./Login.css";
import img from "../../assets/images/login.png";

const Login = () => {
    return(
        <div className="login" id="login">
            <img src={img} alt="hinh nen login"/>
            <form action="" className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" placeholder="crabigator@durtles.com" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="i love learning kanji" required/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="" />
                    <label>Keep me logged in for 2 weeks</label>
                </div>
                <button className="form-btn">Login</button>
            </form>
            <div className="nav">
                <a href="/signup">Signup</a>
                <a href="">Forgot your password?</a>
                <a href="">Return to landing page</a>
                <a href="">Resend confirmation instructions</a>
            </div>
        </div>
    )
}

export default Login;