import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import axios from 'axios';


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState(null)

    const { setToken } = useContext(userContext);
    const navigate = useNavigate();

    const handleEmail = (e) =>
        setFormData(current => ({ ...current, email: e.target.value }))
    const handelPassword = (e) =>
        setFormData(current => ({ ...current, password: e.target.value }))

    const loginAccount = async () => {
        setLoading(true)
        setLoginError(null);
        try {
            const res = await axios.post("http://localhost:5000/users/Login", formData)
            console.log("Login successful:", res.data);
            setToken(res.data.token)
            navigate("/category");
        } catch (err) {
            console.log("Login failed:", err);
            setLoginError("Invalid email or password")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="login-page">
            <h2>Login</h2>
            <div className="login-form">
                <input type="email" placeholder="Email" onChange={handleEmail} />
                <input type="password" placeholder="Password" onChange={handelPassword} />
                <button onClick={loginAccount} disabled={loading}>
                    {loading ? "Loggin in..." : "Login"}
                </button>
                {loginError && <p className="error">{loginError}</p>}
            </div>
        </div>
    )
}
export default Login

