import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    displayName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    phoneNumber: "",
    role: "User"
  });

  const [registerError, setRegisterError] = useState(null);
  const navigate = useNavigate();

  const handleUserName = (e) =>
    setFormData(current => ({ ...current, userName: e.target.value }));
  const handleDisplayName = (e) =>
    setFormData(current => ({ ...current, displayName: e.target.value }));
  const handleEmail = (e) =>
    setFormData(current => ({ ...current, email: e.target.value }));
  const handlePassword = (e) =>
    setFormData(current => ({ ...current, password: e.target.value }));
  const handleDateOfBirth = (e) =>
    setFormData(current => ({ ...current, dateOfBirth: e.target.value }));
  const handlePhoneNumber = (e) =>
    setFormData(current => ({ ...current, phoneNumber: e.target.value }));

  const registerAccount = async () => {
    try {
      const res = await axios.post("http://localhost:5000/users/Register", formData);
      console.log("Registration successful:", res.data);
      navigate("/login");
    } catch (err) {
      console.log("Registration failed:", err);
      console.log(err);

      setRegisterError("Try again");
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <div className="register-form">
        <input type="text" placeholder="Username" onChange={handleUserName} />
        <input type="text" placeholder="Display Name" onChange={handleDisplayName} />
        <input type="email" placeholder="Email" onChange={handleEmail} />
        <input type="password" placeholder="Password" onChange={handlePassword} />
        <input type="date" placeholder="Date of Birth" onChange={handleDateOfBirth} />
        <input type="tel" placeholder="Phone Number" onChange={handlePhoneNumber} />
        <button onClick={registerAccount}>Register</button>
        {registerError && <p className="error">{registerError}</p>}
      </div>
    </div>
  );
};

export default Register;
