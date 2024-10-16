import styles from '../HomePageCSS/NewsLetterSubscription.module.css'

function NewsLetterSubscription() {
    return(
        <div className={styles.subscription}>
            <div className={styles.text}>
               <h3>Subscribe</h3>
                <h1>To Our NewsLetter</h1> 
            </div>
            <div className={styles.input_fields}>
                <input type='text' placeholder='Name'></input>
            </div>
            <div className={styles.email_field}>
                <input type='email' placeholder='Email'></input>
            </div>
            <div className={styles.message_field}>
            <textarea rows="4" cols="50" placeholder="Enter your text here"></textarea>
            </div>
            
        </div>
    );
}

export default NewsLetterSubscription;