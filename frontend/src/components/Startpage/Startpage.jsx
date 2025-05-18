import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';  
import './Startpage.css';

const Startpage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/SignUp"); 
    };

    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Join the Game Talk!</h1>
                    <p>
                        Welcome to the ultimate community-driven gaming website where players like you can share posts, drop hot takes, and jump into the comments. From epic game reviews to news, memes, and discussions—this is your space to connect, create, and level up with fellow gamers.
                    </p>
                    <button className="cta-button" onClick={handleGetStarted}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <h2>Share Your Thoughts</h2>
                    <p>Post your game reviews, opinions, and experiences to connect with others.</p>
                </div>
                <div className="feature">
                    <h2>Join Discussions</h2>
                    <p>Engage with the community in ongoing discussions on the latest gaming trends and news.</p>
                </div>
                <div className="feature">
                    <h2>Stay Updated</h2>
                    <p>Get the latest updates on your favorite games, releases, and events.</p>
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial">
                    <p>"This is the best place to get in touch with other gamers. The community is amazing!"</p>
                    <span>- Alex G.</span>
                </div>
                <div className="testimonial">
                    <p>"I love being able to share my reviews and get feedback from other passionate gamers!"</p>
                    <span>- Jamie T.</span>
                </div>
            </section>
            <Footer /> 
        </div>
    );
};

export default Startpage;
