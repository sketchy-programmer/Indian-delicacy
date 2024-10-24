import styles from '../MenuPageCSS/MenuPageTheme.module.css';

function MenuPageTheme() {
    return (
        <div className={styles.container}>
            <div className={styles.menutxt}>
                <h3>Order & Enjoy</h3>
                <h1>Our Menu</h1>
            </div>
        </div>
    );
}

export default MenuPageTheme;
