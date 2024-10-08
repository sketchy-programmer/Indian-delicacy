import styles from '../css/FoodCategory.module.css'
import meat from '../assets/HomePageThemeAssetes/meat.png'
import fish from '../assets/HomePageThemeAssetes/fish.png'
import drinks from '../assets/HomePageThemeAssetes/drinks.png'  

function FoodCategory() {
    return(
        <>
            <div>
                <div className=''>
                    <div className={styles.txt}>
                        <h4>Delicious</h4>
                    </div>
                    <div className={styles.category}>
                         <h1>Food Categories</h1>
                    </div>
                    <div className={styles.cards}>
                        <div className={styles.meatcard}>
                            <div className={styles.cardimg}>
                                <img src={meat} alt='meat'></img>
                            </div>
                            <div className={styles.cardtitle}>
                                <h1>Meat</h1>
                            </div>
                            <div className={styles.discription}>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                            <button className={styles.readmorebt}>
                                Read More
                            </button>
                        </div>
                        <div className={styles.fishcard}>
                            <div className={styles.cardimg}>
                            <img src={fish} alt={fish}></img>
                            </div>
                            <div className={styles.cardtitle}>
                                <h1>Fish</h1>
                            </div>
                            <div className={styles.discription}>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                            <button className={styles.readmorebt}>
                                Read More
                            </button>
                        </div>
                        <div className={styles.drinkscard}>
                            <div className={styles.cardimg}>
                                <img src={drinks} alt={drinks}></img>
                            </div>
                            <div className={styles.cardtitle}>
                                <h1>Drinks</h1>
                            </div>
                            <div className={styles.discription}>
                                <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                                industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                            <button className={styles.readmorebt}>
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodCategory;