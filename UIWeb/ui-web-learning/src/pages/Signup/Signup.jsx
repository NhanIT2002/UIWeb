import React from "react";

import "./Signup.css";
import bgImg from "../../assets/images/signup.png";

const Signup = () => {
    return (
        <div className="signup" id="signup">
            <img src={bgImg} alt="hinh nen signup" />
            <form action="" className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" className="form-control" placeholder="KanjiMaster888" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" className="form-control" placeholder="crabigator@durtles.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="i love learning kanji" required />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="" />
                    <label>Accept the <a href="/term-of-service" target="blank">Term of Service</a></label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="" />
                    <label>Accept the <a href="">Privacy Policy</a></label>
                </div>
                <button className="form-btn">Signup</button>
            </form>
            <div className="nav">
                <a href="/login">Login</a>
                <a href="">Forgot your password?</a>
                <a href="">Return to landing page</a>
                <a href="">Resend confirmation instructions</a>
            </div>
        </div>
    )
}

export default Signup;