import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { user, setUser } = useContext(userContext);  

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSignUp = () => navigate("/SignUp");
    const handleSignIn = () => navigate("/SignIn");
    const handleProfile = () => navigate("/profile");
    const handleLogout = () => {
        setUser(null);  
        navigate("/");  
    };

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);
    
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="menu">
                    <i className="fas fa-bars"></i>
                </div>

                <div className="brand-button" onClick={() => navigate("/")}>
                    <img src="/images/logo.png" alt="logo" className="logo" />
                    <h2 className="site-name">Immortal</h2>
                </div>
            </div>

            <div className="navbar-center">
                <ul className="navbar-links">
                    <li><i className="fas fa-house"></i><span>Home</span></li>
                    <li><i className="fas fa-envelope"></i><span>Help</span></li>
                    <li><i className="fas fa-briefcase"></i><span>Join us</span></li>
                    <li><i className="fas fa-hand-holding-dollar"></i><span>Vip</span></li>
                </ul>
            </div>

            <div className="navbar-right">
                <div className="search-box">
                    <input type="text" placeholder="Search" />
                    <i className="fas fa-magnifying-glass"></i>
                </div>

                <div className="mode-toggle" onClick={toggleTheme}>
                    <i className={`fas fa-${isDarkMode ? "sun" : "moon"}`}></i>
                </div>

                {!user ? (
                    <div className="auth-buttons">
                        <button className="auth-button" onClick={handleSignIn}>Sign In</button>
                        <button className="auth-button" onClick={handleSignUp}>Sign Up</button>
                    </div>
                ) : (
                    <div className="profile-links">
                        <button className="profile-button" onClick={handleProfile}>
                            <i className="fas fa-user"></i> {user.name}
                        </button>
                        <button className="auth-button" onClick={handleLogout}>
                            <i className="fas fa-sign-out-alt"></i> Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
