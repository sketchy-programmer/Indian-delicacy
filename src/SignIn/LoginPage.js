import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5038/api/indian_cousins/LoginUser', { 
        userEmail: email,
        userPassword: password,
      });
      const { role, token, user } = response.data;
      
      // Store user details in localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('userEmail', user.email);
      localStorage.setItem('userFirstName', user.firstName);
      localStorage.setItem('userLastName', user.lastName);
      localStorage.setItem('role', role);
  
      // Dispatch a custom event to notify navigation bar
      window.dispatchEvent(new Event('userLoggedIn'));
  
      // Redirect based on role
      if (role === 'Admin') navigate('/add-item');
      else navigate('/menu');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Try again.');
    }
  };
  

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
