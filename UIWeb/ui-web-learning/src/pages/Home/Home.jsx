import React from "react";

import './Home.css';
import logo from "../../assets/images/logo.png";

const Home = () => {
    return (
        <div className="home">
            <div className="header">
                <div className="nav">
                </div>
                <div className="head">
                    <div className="logo">
                        <img src={logo} />
                        <div className="hover-text">Yep, that's me!</div>
                    </div>
                    <div className="navbar">
                        <div>Success Stories</div>
                        <div>Our Method</div>
                        <div>Sign In</div>
                        <div>Join Us</div>
                    </div>
                    <div className="introduce">
                        <span className="content-1">2,000 kanji.</span> <br />
                        <span className="content-2">6,000 vocabulary words.</span> <br />
                        <span className="content-3">In just over a year.</span> <br />
                        <div className="group-button">
                            <button className="learn-more">Learn more</button>
                            <button className="chat">Chat with us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stories">
                <div className="container">
                    <span className="title-stories">From Japanese residents to self learners, our members learn to read Japanese quickly</span>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Home;