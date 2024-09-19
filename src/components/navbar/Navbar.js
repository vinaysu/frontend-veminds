import React from 'react'
import styles from './Navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ForwardIcon from '@mui/icons-material/Forward';
import { Link,navLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Navbar() {
    return (
        <div className={`${styles.mainContainer} `} >
            <div className={styles.left} >
                <img className={styles.logo} src='/images/navbar/Logo-Ve-Minds.jpg' alt='Vemind Logo' />
                <h2 className={styles.title} >veminds</h2>
            </div>
            <div className={`${styles.right} `} >

                <Link class={styles.link} to={'/'} ><span className={styles.hvr} >Home</span></Link>
                <Link class={styles.link} to={'/about'} >  <span className={styles.hvr} >About</span></Link>
                <Link class={styles.link} to={'/courses'} >  <span className={styles.hvr} >Courses <ArrowDropDownIcon /> </span></Link>
                <Link class={styles.link} to={'/explore'} >  <span className={styles.hvr} >Explore <ArrowDropDownIcon /> </span></Link>
                <Link class={styles.link} to={'/contact'} > <span className={styles.hvr} >Contact</span></Link>

                <Link class={styles.link}  to={'/signUp'} > 
                <div className={`${styles.joinNowNavbar}  ${styles.hvrj} `} >
                    <span>Join Now</span>
                    <ForwardIcon />
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Navbar