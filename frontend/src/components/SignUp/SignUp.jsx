import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        userName: "",
        displayName: "",
        email: "",
        password: "",
        phoneNumber: "",
        dateOfBirth: "",
        role: "User"
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleUserName = (e) =>
        setFormData(current => ({ ...current, userName: e.target.value }));
    const handleDisplayName = (e) =>
        setFormData(current => ({ ...current, displayName: e.target.value }));
    const handleEmail = (e) =>
        setFormData(current => ({ ...current, email: e.target.value }));
    const handlePassword = (e) =>
        setFormData(current => ({ ...current, password: e.target.value }));
    const handlePhoneNumber = (e) =>
        setFormData(current => ({ ...current, phoneNumber: e.target.value }));
    const handleDateOfBirth = (e) =>
        setFormData(current => ({ ...current, dateOfBirth: e.target.value }));


    const newAccount = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/users/Register", formData);
            console.log("Registration successful:", res.data);
            navigate("/SignIn");
        } catch (err) {
            console.log("Registration failed:", err);
            if (err.response && err.response.status === 409) {
                setError("Email or Username already exists. Please try a different one.");
            } else {
                setError("Registration failed. Please try again later.");
            }
        }
    };

    return (
        <div className="register-page">
            <h2>Sign Up</h2>
            <div className="register-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.userName}
                    onChange={handleUserName}
                    required
                />
                <input
                    type="text"
                    placeholder="Display Name"
                    value={formData.displayName}
                    onChange={handleDisplayName}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleEmail}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handlePassword}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handlePhoneNumber}
                    required
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleDateOfBirth}
                    required
                />
                <button onClick={newAccount}>Confirm</button>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default SignUp;
