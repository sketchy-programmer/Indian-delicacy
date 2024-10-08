import leftTable from '../assets/HomePageThemeAssetes/leftTable.png'
import rightTable from '../assets/HomePageThemeAssetes/rightTable.png'
import fullTable from '../assets/HomePageThemeAssetes/fullTable.png'
import employeeSafety from '../assets/HomePageThemeAssetes/employeesSafety.png'
import styles from '../css/CustomerProtection.module.css'

function CustomerProtection() {
    return(
        <>
            <div>
                <div className={styles.tableimg}>
                    <div className={styles.sidetable}>
                        <img className={styles.lefttable} src={leftTable} alt='lefttable'></img>
                        <img className={styles.righttable} src={rightTable} alt='righttable'></img>
                    </div>
                </div>
                <div className={styles.txt}>
                    <h1>We Care About You</h1>
                </div>
                <div className={styles.readmore}>
                    <button>Read More</button>
                </div>
                <div className={styles.twotables}>
                    <img src={fullTable} alt='fulltable'></img>
                    <img src={fullTable} alt='fulltable'></img>
                </div>
                <div className={styles.employeesafety}>
                    <img src={employeeSafety} alt='employeesafety'></img>
                </div>
            </div>
        </>
    );
}

export default CustomerProtection;