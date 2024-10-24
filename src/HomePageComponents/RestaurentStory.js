import styles from '../HomePageCSS/RestaurentStory.module.css'
import Bartender from '../assets/HomePageThemeAssetes/bartender.png'
import wall_plant from '../assets/HomePageThemeAssetes/wall_plant.png'
import wall_accessories from '../assets/HomePageThemeAssetes/wall_accessories.png'

function RestaurentStory() {
    return(
        <>
            <div>
                <div id='OurStory' className={styles.images}>
                    <div className={styles.bartender}>
                        <img className={styles.bar_tneder_img} src={Bartender} alt='bartenderimage'></img>
                    </div>
                </div>
                <div className={styles.wall_plant}>
                    <img src={wall_plant} alt='wall plant'></img>
                </div>
                <div className={styles.wall_accessories}>
                    <img src={wall_accessories} alt='wall_accessories'></img>
                </div>
                <div className={styles.txt}>
                    <h3>Story</h3>
                    <h1>Our Restaurent</h1>
                    <p>Adipisicing minim sunt tempor enim id nisi dolor esse cupidatat anim labore labore anim. Est qui ea adipisicing 
                        non ut excepteur cillum labore sit voluptate est voluptate sunt elit. Pariatur sint aliquip ad proident velit qui 
                        in mollit velit quis ipsum aute.</p>
                </div>
                <button className={styles.readmorebt}>
                                Read More
                </button>
            </div>
        </>
    );
}

export default RestaurentStory;