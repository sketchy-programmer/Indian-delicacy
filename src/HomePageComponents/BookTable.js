import styles from '../HomePageCSS/BookTable.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function BookTable() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass data via state or query params
    navigate('/select-table', { state: { time, date, email } });
  };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <div className={styles.background}>
              <div className={styles.container}> 
                <div className={styles.datefield}>
                    <label className={styles.datetxt}>Date</label>
                    <FontAwesomeIcon className={styles.arrowdownkey} icon={faAngleDown}></FontAwesomeIcon>
                    <input className={styles.date} type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                    {/* <input type='time' className='time' value={time} onChange={handleChange} /> */}
                </div>

                <div className={styles.timefield}>
                    <label className={styles.timetxt}>Time</label>
                    <FontAwesomeIcon className={styles.arrowdownkey} icon={faAngleDown}></FontAwesomeIcon>
                    <input type='time' className={styles.time} value={time} onChange={(e) => setTime(e.target.value)} />
                </div>

                <div className={styles.emailfield}>
                    <label className={styles.emailtxt}>email</label>
                    <FontAwesomeIcon className={styles.arrowdownkey} icon={faAngleDown}></FontAwesomeIcon>
                    <input type='emial' className={styles.email} placeholder='example123@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className={styles.btn}>
                    <button className={styles.bt}>Check Availability</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }

export default BookTable;