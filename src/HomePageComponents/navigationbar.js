import styles from '../HomePageCSS/navigationbar.module.css';
import logo from '../assets/navigationbarAssetes/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';  // Import from react-scroll

function NavigationBar() {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <div className={styles.navigationbackground}>
                <Link className={styles.link} to="/cart"><FontAwesomeIcon className={styles.cart} icon={faCartShopping} /></Link>
                <ul className={styles.menubar}>
                    <li><Link className={styles.link} to="/">HOME</Link></li>
                    <li><Link className={styles.link} to="/menu">MENU</Link></li> 
                    <li>
                        <ScrollLink className={styles.link} to="OurStory" smooth={true} duration={500}>
                            ABOUT US
                        </ScrollLink>
                    </li>
                    <li>
                        {/* Use ScrollLink for smooth scrolling */}
                        <ScrollLink className={styles.link} to="footer" smooth={true} duration={500}>
                            CONTACT
                        </ScrollLink>
                    </li>
                    <li><Link className={styles.link} to="/Add_item">Add Item</Link></li>
                </ul>
                <label><Link className={styles.signup} to="/SignUp">Sign up</Link></label>
            </div>
        </div>
    );
}

export default NavigationBar;
