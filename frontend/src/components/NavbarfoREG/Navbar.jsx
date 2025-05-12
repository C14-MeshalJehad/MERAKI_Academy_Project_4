import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../App'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const NavbarfoREG = () => {
    const { token, setToken } = useContext(userContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null)
        navigate("/Login")
    }

    return (
        <nav className="navbar">
            <h2 className="logo">Immortal</h2>
            <ul className="nav-links">
                {!token ? (
                    <>
                        <li>
                            <Link to="/Login">Login</Link>
                        </li>
                        <li>
                            <Link to="/Register">Register</Link>
                        </li>
                    </>
                ) : (
                    <li>
                        <button onClick={handleLogout} className="logout-btn">
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavbarfoREG