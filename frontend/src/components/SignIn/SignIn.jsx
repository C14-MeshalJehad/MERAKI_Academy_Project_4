import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setToken, setUser } = useContext(userContext);
    const navigate = useNavigate();

    const handleEmail = (e) => setFormData(prev => ({ ...prev, email: e.target.value }));
    const handlePassword = (e) => setFormData(prev => ({ ...prev, password: e.target.value }));

    const loginAccount = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await axios.post("http://localhost:5000/users/Login", formData);
            setToken(res.data.token);  
            setUser(res.data.user);    
            navigate("/category");     
        } catch (err) {
            setError("Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            <h2>Sign In</h2>
            <div className="register-form">
                <input type="email" placeholder="Email" value={formData.email} onChange={handleEmail} required />
                <input type="password" placeholder="Password" value={formData.password} onChange={handlePassword} required />
                <button onClick={loginAccount} disabled={loading}>
                    {loading ? "Logging in..." : "Sign In"}
                </button>
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    );
};

export default SignIn;
