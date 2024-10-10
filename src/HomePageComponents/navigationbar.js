import styles from '../HomePageCSS/navigationbar.module.css'
import logo from '../assets/navigationbarAssetes/logo.png'
import lamp from '../assets/navigationbarAssetes/lamp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
function NavigationBar() {
    return(
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <div className={styles.navigationbackground}>
                <FontAwesomeIcon className={styles.cart} icon={faCartShopping} />
                <ul className={styles.menubar}>
                    <li>HOME</li>
                    <li>MENU</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                </ul>
                <label><a href='../components/navigationbar.js' className={styles.signup}>Sign up</a></label>
                <img className={styles.lamp} src={lamp} alt='lamp'></img>
            </div>

        </div>
    );
}

export default NavigationBar;