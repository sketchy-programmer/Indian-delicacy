import styles from '../HomePageCSS/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return(
        <footer id="footer" className={styles.footer}>
            <div className={styles.about}>
                <h1>About</h1>
                <h3>History</h3>
                <h3>Our Team</h3>
                <h3>Mission Statement</h3>
                <h3>Terms & Conditions</h3>
                <h3>Privacy policy</h3>
            </div>
            <div className={styles.what_we_do}>
                <h1>What we do</h1>
                <h3>News & Stories</h3>
                <h3>Publications</h3>
                <h3>Actions</h3>
                <h3>Recomendations</h3>
                <h3>Help</h3>
            </div>
            <div className={styles.social_media_handles}>
                <form>
                    <div className={styles.subscription}>
                        <h1>Sign Up To Receive Our Newsletter</h1>
                    </div>
                    <div>
                        <input className={styles.email_field} type='email'></input>
                        <button>Follow us!</button>
                    </div>
                </form>
                <div className={styles.social_media_buttons}>
                    <a href='https://www.facebook.com/'><FontAwesomeIcon className={styles.facebook} icon={faFacebookF}></FontAwesomeIcon></a>
                    <a href='https://x.com/?lang=en'><FontAwesomeIcon className={styles.twitter} icon={faTwitter}></FontAwesomeIcon></a>
                    <a href='https://www.instagram.com/'><FontAwesomeIcon className={styles.instagram} icon={faInstagram}></FontAwesomeIcon></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;