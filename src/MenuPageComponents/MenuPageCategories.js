import styles from '../MenuPageCSS/MenuPageCategories.module.css'
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.category}>
                         <h1>Food Categories</h1>
                </div>
                <div className={styles.categories}>
                    <ul>
                        <li><Link className={styles.link} to="/menu">All Items</Link></li>
                        <li><Link className={styles.link} to="/cuisins">Cuisines</Link></li>
                        <li><Link className={styles.link} to="/SideDishes">Side dishes</Link></li>
                        <li><Link className={styles.link} to="/Indian_FastFood">Indian Fast Food</Link></li>
                        <li><Link className={styles.link} to="/Drinks">Drinks</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Categories;
