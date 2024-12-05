import styles from '../HomePageCSS/NewsLetterSubscription.module.css'
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

function NewsLetterSubscription() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
    
        try {
          // Send the form data to the backend API
          await axios.post('http://localhost:5000/api/subscribe', { name, email, message });
          alert('Subscription successful! Please check your email.');
        } catch (error) {
          console.error('Error sending subscription:', error);
          alert('There was an error. Please try again.');
        }
      };
    
    return(
        <form onSubmit={handleSubmit}>
            <div className={styles.subscription}>
                <div className={styles.text}>
                <h3>Subscribe</h3>
                    <h1>To Our NewsLetter</h1> 
                </div>
                <div className={styles.input_fields}>
                    <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className={styles.email_field}>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className={styles.message_field}>
                    <textarea rows="4" cols="50" placeholder="Enter your text here" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <div >
                    <button className={styles.button} type='submit' value='Subscribe' onClick={handleSubmit}>Subscribe</button>
                </div>
            
            </div>
        </form>
    );
}

export default NewsLetterSubscription;