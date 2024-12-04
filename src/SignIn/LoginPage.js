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
        userEmail: email,  // change 'email' to 'userEmail'
        userPassword: password  // change 'password' to 'userPassword'
      });
      const { role, token } = response.data;
  
      // Save token to localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('role', role);
  
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
