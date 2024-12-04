import React, { useState } from 'react';
import axios from 'axios';
import styles from '../SignInCSS/SignUp.module.css';
import { useNavigate } from 'react-router-dom'; 
// For navigation

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const navigate = useNavigate(); // Navigation hook for redirecting

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
        if (!firstName || !lastName || !email || !password) {
            alert('All fields are required.');
            return;
        }

        const newUser = {
            userFirstName: firstName,
            userLastName: lastName,
            userEmail: email,
            userPassword: password,
            userConfirmPass: confirmPass,
        };

        try {
            const response = await axios.post('http://localhost:5038/api/indian_cousins/AddUser', newUser, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 201) {
                alert('Registration successful!');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPass('');
            } else {
                alert(response.data.message || 'Registration failed!');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2>Sign Up</h2>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
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
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
            />
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.registerButton}>Register</button>
                <button
                    type="button"
                    className={styles.loginButton}
                    onClick={() => navigate('/login')} /* </div>to="/login" */ // Redirect to login page
                >
                    Login
                </button>
            </div>
        </form>
    );
}

export default SignUp;
