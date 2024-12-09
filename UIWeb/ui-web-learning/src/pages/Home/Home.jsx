import React from "react";

import './Home.css';
import logo from "../../assets/images/logo.png";
import logoTofugu from "../../assets/images/tofugu.png";
import Stories from "../../components/Stories/Stories.jsx";
import Methods from "../../components/Methods/Methods.jsx";

const Home = () => {
    // Ham tao hieu ung truot theo chieu doc khi click vao the a
    const handleSmoothScroll = (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
        const targetId = event.currentTarget.getAttribute('href').slice(1); // Lấy id từ href
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
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
                        <div><a href="#stories" onClick={handleSmoothScroll}>Success Stories</a></div>
                        <div><a href="#methods" onClick={handleSmoothScroll}>Our Method</a></div>
                        <div><a href="/login">Sign In</a></div>
                        <div><a className="nav-login" href="/signup">Join Us</a></div>
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
                <div id="stories" className="container">
                    <span className="title-stories">From Japanese residents to self learners, our members learn to read Japanese quickly</span>
                </div>
            </div>
            <div className="stories">
                <Stories />
            </div>
            <div className="bgl"></div>
            <div id="methods" className="methods">
                <div className="container">
                    <span className="methods-title">What makes the WaniKani method effective?</span>
                </div>
                <div className="method-content">
                    <Methods />
                </div>
            </div>
            <div className="bgl-1"></div>
            <div id="contact" className="contact">
                <div className="contact-container">
                    <div className="contact-title">How many kanji can you learn this month? Try WaniKani for tree.</div>
                    <div className="contact-button">
                        <button className="join">Join us</button>
                        <button className="chat">Chat with us</button>
                    </div>
                    <div className="contact-des">...or <a href="/signup">sign in</a></div>
                    <div className="footer">
                        <div className="footer-title">WaniKani is brought to you by</div>
                        <a href="https://www.tofugu.com/">
                            <img src={logoTofugu} alt="Logo Tofugu" />
                        </a>
                        <div className="footer-des">Copyright &copy; Tofugu LLC, よ.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;