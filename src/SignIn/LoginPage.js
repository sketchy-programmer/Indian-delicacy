import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User'); // Default role is 'User'
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'role') setRole(value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message on new submission

    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:5000/api/indian_cousins/LoginUser', {
        userEmail: email,
        userPassword: password,
      });

      // Check response for success
      if (response.data.success) {
        // Store token in localStorage (or cookies, if preferred)
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        

        // Redirect based on role
        if (response.data.role === 'Admin') {
          navigate('/Admin'); // Replace with actual admin dashboard route
        } else {
          navigate('/User'); // Replace with actual user dashboard route
        }
      } else {
        setErrorMessage(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Handle server or network errors
      setErrorMessage(error.response?.data?.message || 'Error logging in. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Role Selection */}
        <select name="role" value={role} onChange={handleInputChange}>
          <option value="Customer">Customer</option>
          <option value="Admin">Admin</option>
        </select>

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          required
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
        />

        {/* Error Message */}
        {errorMessage && <div className="error" style={{ color: 'red' }}>{errorMessage}</div>}

        {/* Submit Button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
