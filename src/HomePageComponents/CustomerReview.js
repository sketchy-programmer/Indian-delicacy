import styles from '../HomePageCSS/CustomerReview.module.css'
import customer from '../assets/HomePageThemeAssetes/customer.png'
import customer2 from '../assets/HomePageThemeAssetes/customer_2.png'
import customer3 from '../assets/HomePageThemeAssetes/customer_3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function CustomerReview() {
    return(
        <div className={styles.container}>
            <div className={styles.txt}>
                 <h3>What Our</h3>
                 <h1>Customers Say</h1>
            </div>
            <div className={styles.review_cards}>
                <div className={styles.card1}>
                            <div className={styles.cardimg}>
                                <img src={customer} alt='customer'></img>
                            </div>
                            <div className={styles.card_txt}>
                                <div className={styles.cardtitle}>
                                    <h1>Jhon Smith</h1>
                                    <h3>Aug/03/2024</h3>
                                </div>
                                <div className={styles.discription}>
                                    <p>
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard."
                                    </p>
                                </div>
                            </div>
                            
                            <div className={styles.rating}>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                <div className={styles.card2}>
                    <div className={styles.cardimg}>
                        <img src={customer2} alt='customer2'></img>
                    </div>
                    <div className={styles.card_txt}>
                        <div className={styles.cardtitle}>
                            <h1>Lara Jhonson</h1>
                            <h3>Oct/31/2024</h3>
                        </div>
                        <div className={styles.discription}>
                            <p>
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard."
                            </p>
                        </div>
                    </div>
                            
                    <div className={styles.rating}>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                </div>
                <div className={styles.card3}>
                <div className={styles.cardimg}>
                        <img src={customer3} alt='customer3'></img>
                    </div>
                    <div className={styles.card_txt}>
                        <div className={styles.cardtitle}>
                            <h1>Paul Henis</h1>
                            <h3>Sep/03/2024</h3>
                        </div>
                        <div className={styles.discription}>
                            <p>
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard."
                            </p>
                        </div>
                    </div>
                            
                    <div className={styles.rating}>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerReview;