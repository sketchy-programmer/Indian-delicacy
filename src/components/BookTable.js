import styles from '../css/BookTable.module.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function BookTable() {
    const [time, setTime] = useState('12:35');
  
    const handleChange = (e) => {
      setTime(e.target.value);
    };
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.background}>
            <div className={styles.datefield}>
                <label className={styles.datetxt}>Date</label>
                <FontAwesomeIcon className={styles.arrowdownkey} icon={faAngleDown}></FontAwesomeIcon>
                <input className={styles.date} type='date'></input>
                {/* <input type='time' className='time' value={time} onChange={handleChange} /> */}
            </div>

            <div className={styles.timefield}>
                <label className={styles.timetxt}>Time</label>
                <FontAwesomeIcon className={styles.arrowdownkey} icon={faAngleDown}></FontAwesomeIcon>
                <input type='time' className={styles.time} value={time} onChange={handleChange} />
            </div>

            <div className={styles.emailfield}>
                <label className={styles.emailtxt}>Time</label>
                <FontAwesomeIcon className={styles.arrowdownkey} icon={faAngleDown}></FontAwesomeIcon>
                <input type='emial' className={styles.email} value='example123@gmail.com' />
            </div>
            
            <div>
                <button className={styles.bt}>Check Availability</button>
            </div>
          </div>
        </div>
      </>
    );
  }

export default BookTable;