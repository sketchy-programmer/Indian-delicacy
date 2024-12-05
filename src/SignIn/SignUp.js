import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../SignInCSS/SignUp.module.css'; // Ensure this CSS file exists

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [role, setRole] = useState('Customer'); // Default role is 'Customer'

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }
        if (password !== confirmPass) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/indian_cousins/AddUser', {
                userFirstName: firstName,
                userLastName: lastName,
                userEmail: email,
                userPassword: password,
                role,
            });

            if (response.status === 201) {
                alert(`${role} registered successfully!`);
                navigate('/login');  // Redirect to login page
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error.response?.data?.message || 'Registration failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
            </select>   
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.registerButton}>Register</button>
                <button type="button" className={styles.loginButton} onClick={() => navigate('/login')}>Login</button>
            </div>
        </form>
    );
}

export default SignUp;
