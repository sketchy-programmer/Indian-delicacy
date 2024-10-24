import styles from '../HomePageCSS/navigationbar.module.css'
import logo from '../assets/navigationbarAssetes/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function NavigationBar() {
    return(
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <div className={styles.navigationbackground}>
                <Link className={styles.link} to="/cart"><FontAwesomeIcon className={styles.cart} icon={faCartShopping} /></Link>
                <ul className={styles.menubar}>
                    <li ><Link className={styles.link} to="/">HOME</Link></li>
                    <li><Link className={styles.link} to="/menu">MENU</Link></li> 
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li><Link className={styles.link} to="/Add_item">Add Item</Link></li>
                </ul>
                <label><a href='../components/navigationbar.js' className={styles.signup}>Sign up</a></label>
            </div>

        </div>
    );
}

export default NavigationBar;