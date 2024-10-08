import styles from '../css/Ingredients.module.css'
import Ingredients from '../assets/HomePageThemeAssetes/Ingredients.png'

function IngredientsSection() {
    return(
        <>
            <div>
                <div className={styles.txt}>
                    <h3>Ingredients</h3>
                    <h1>Fresh and Healthy Ingredients</h1>
                    <p>Adipisicing minim sunt tempor enim id nisi dolor esse cupidatat anim labore labore anim. Est qui ea adipisicing 
                        non ut excepteur cillum labore sit voluptate est voluptate sunt elit. Pariatur sint aliquip ad proident velit qui 
                        in mollit velit quis ipsum aute.</p>
                </div>
                <button className={styles.readmorebt}>
                                Read More
                </button>
            </div>
            <div className={styles.image}>
                <img src={Ingredients} alt='ingredients'></img>
            </div>
        </>
    );
}

export default IngredientsSection;