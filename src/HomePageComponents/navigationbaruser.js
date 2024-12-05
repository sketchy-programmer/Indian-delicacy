import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../HomePageCSS/navigationbar.module.css';
import logo from '../assets/navigationbarAssetes/logo.png';
import { animateScroll as scroll, scroller } from 'react-scroll';
function NavigationBarUser() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [user, setUser] = useState(null); // Initialize with null
    const navigate = useNavigate();
    const [role, setRole] = useState(null);  // Track role

    let hideTooltipTimeout;

    // Scroll to section
    const scrollToSection = () => {
        scroller.scrollTo("OurStory", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const scrollToContact = () => {
        scroller.scrollTo("footer", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    useEffect(() => {
        const updateUserState = () => {
            const userEmail = localStorage.getItem('userEmail');
            const firstName = localStorage.getItem('userFirstName');
            const lastName = localStorage.getItem('userLastName');
            const userRole = localStorage.getItem('role');  // Retrieve role
    
            if (userEmail && firstName && lastName) {
                setUser({
                    email: userEmail,
                    firstName,
                    lastName,
                });
                setRole(userRole);
            } else {
                setUser(null);
                setRole(null);
            }
        };
    
        // Load initial user data
        updateUserState();
    
        // Listen for login/logout events
        window.addEventListener('userLoggedIn', updateUserState);
        window.addEventListener('userLoggedOut', updateUserState);
    
        return () => {
            window.removeEventListener('userLoggedIn', updateUserState);
            window.removeEventListener('userLoggedOut', updateUserState);
        };
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        setRole(null);
        window.dispatchEvent(new Event('userLoggedOut'));
        navigate('/login');
    };

    // Show tooltip immediately
    const handleMouseEnter = () => {
        clearTimeout(hideTooltipTimeout); // Clear any existing timeout
        setShowTooltip(true);
    };

    // Hide tooltip after 5 seconds
    const handleMouseLeave = () => {
        hideTooltipTimeout = setTimeout(() => {
            setShowTooltip(false);
        }, 100); // 5 seconds delay
    };

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt='logo'></img>
            <div className={styles.navigationbackground}>
                <Link className={styles.link} to="/cart">
                    <FontAwesomeIcon className={styles.cart} icon={faCartShopping} />
                </Link>
                <div className={styles.userContainer}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <FontAwesomeIcon className={styles.user} icon={faUser} />
                    {showTooltip && (
                        <div 
                            className={styles.tooltip}
                            onMouseEnter={handleMouseEnter} // Keep tooltip open on hover
                            onMouseLeave={handleMouseLeave} // Close when mouse leaves
                        >
                            {user ? (
                                <>
                                    <p>{user.firstName} {user.lastName}</p>
                                    <p>{user.email}</p>
                                    <p>{role}</p>
                                    <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
                                </>
                            ) : (
                                <Link to="/login" className={styles.loginLink}>Login</Link>
                            )}
                        </div>
                    )}
                </div>
                <ul className={styles.menubar}>
                    <li><Link className={styles.link} to="/">HOME</Link></li>
                    <li><Link className={styles.link} to="/menu">MENU</Link></li>
                    <li><a className={styles.link} onClick={scrollToSection}>ABOUT US</a></li>
                    <li><Link className={styles.link} onClick={scrollToContact}>CONTACT</Link></li>
                    {role === 'Admin' && (   // Show only if role is Admin
                        <li><Link className={styles.link} to="/add-item">Add Item</Link></li>
                    )}
                </ul>
                <label><Link className={styles.signup} to="/SignUp">Sign up</Link></label>
            </div>
        </div>
    );
}

export default NavigationBarUser;
