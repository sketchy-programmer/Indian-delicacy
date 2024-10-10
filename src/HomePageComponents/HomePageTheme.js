import CustomerTable from '../assets/HomePageThemeAssetes/eatingTable.png'
import styles from '../HomePageCSS/HomePageTheme.module.css'
import plantWase from '../assets/HomePageThemeAssetes/plant_2.png'
import window from '../assets/HomePageThemeAssetes/window_2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function HomePageTheme() {
    return(
        <>
            <div className={styles.headercontainer}>
                <div className={styles.images}>
                    <div className={styles.windowimg}>
                        <img src={window} alt='window'></img>
                    </div>
                    <div className={styles.windowimg2}>
                        <img src={window} alt='window'></img>
                    </div>
                    <div className={styles.customertableimg}>
                        <img className={styles.customertable} src={CustomerTable} alt='CustomerTable'></img>
                    </div>
                    <div className={styles.plantwaseimg}>
                        <img className={styles.plantwase} src={plantWase} alt='plant'></img>
                    </div>
                </div>
                
                <div className={styles.text}>
                    <h1 className={styles.homepagetag}>Eat, drink and <br></br>Enjoy.</h1>
                    <h1 className={styles.homepagetagh3}>Your Restaurent is Waiting For You</h1>
                    <p className={styles.homepageparagraph}>Lorem Ipsum dolor sit amet, consectutur adipiscing elit,<br></br> sed do eisumod tempor incididunt ut.</p>
                </div>
                <div className={styles.explorebt}>
                    <label><a className={styles.explorebutton} href='../components/HomePageTheme.js'>Explore</a></label>
                    <label className={styles.menubt}>See Menu</label>
                </div>
                <div className={styles.bookatabletxt}>
                    <p>Book a Table</p>
                    <FontAwesomeIcon className={styles.arrowright} icon={faArrowRight}></FontAwesomeIcon>
                </div>
            </div>
        </>
    );
}

export default HomePageTheme;