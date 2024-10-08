import styles from '../css/chef.module.css'
import chef from '../assets/HomePageThemeAssetes/chef.png'
import chef_accessories from '../assets/HomePageThemeAssetes/chef_accessories.png'

function WordsFromChef() {
    return(
        <>
        <div>
            <div className={styles.background}>
                <div className={styles.txt}>
                    <h3>Words from</h3>
                    <h1>The Chef</h1>
                    <p>Adipisicing minim sunt tempor enim id nisi dolor esse cupidatat anim labore labore anim. Est qui ea adipisicing 
                        non ut excepteur cillum labore sit voluptate est voluptate sunt elit. Pariatur sint aliquip ad proident velit qui 
                        in mollit velit quis ipsum aute.</p>
                </div>
                <button className={styles.readmorebt}>
                                Read More
                </button>

                <div className={styles.images}>
                    <img className={styles.chef} src={chef} alt='chef'></img>
                    <img className={styles.utensils} src={chef_accessories} alt='chef_accessories'></img>
                </div>
            </div>
        </div>
        </>
    );
}

export default WordsFromChef;