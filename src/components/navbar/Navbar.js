import React, { useState } from 'react';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ForwardIcon from '@mui/icons-material/Forward';
import { Link, useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
    const location = useLocation();  // Get the current route location

    // Function to check if the current link is active
    const isActive = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <div className={`${styles.mainContainer}`}>
            <div className={styles.left}>
                <img className={styles.logo} src='https://res.cloudinary.com/dkasinto0/image/upload/v1726806341/logo-Ve-Minds_bfc8ut.jpg' alt='Vemind Logo' />
                <h2 className={styles.title}>veminds</h2>
            </div>
            <div className={`${styles.right}`}>
                <Link className={`${styles.link} ${isActive('/') ? styles.active : ''}`} to={'/'}>
                    <span className={styles.hvr}>Home</span>
                </Link>

                {/* Courses link with hover dropdown */}
                <div
                    className={styles.coursesLink}
                    onMouseEnter={() => setShowCoursesDropdown(true)}
                    onMouseLeave={() => setShowCoursesDropdown(false)}
                >
                    <Link className={`${styles.link} ${isActive('/courses') ? styles.active : ''}`} to={'/courses'}>
                        <span className={styles.hvr}>Courses </span>
                    </Link>
                    <ArrowDropDownIcon sx={{color:'white'}} />

                    {showCoursesDropdown && (
                        <div className={styles.coursesDropdown}>
                            <ul>
                                <a href='/Courses#fullStack'>  <li>MERN Full Stack</li></a>
                                <a href='/Courses#dataAnalysis' >  <li>Data Analysis</li></a>
                                <a href='/Courses#dataScience' >   <li>Data Science</li></a>
                            </ul>
                        </div>
                    )}
                </div>

                {/* <Link className={`${styles.link} ${isActive('/explore') ? styles.active : ''}`} to={'/explore'}>
                    <span className={styles.hvr}>Explore <ArrowDropDownIcon /></span>
                </Link> */}
                <Link className={`${styles.link} ${isActive('/contact') ? styles.active : ''}`} to={'/contact'}>
                    <span className={styles.hvr}>Contact</span>
                </Link>

                <Link className={`${styles.link} ${isActive('/signUp') ? styles.active : ''}`} to={'/signUp'}>
                    <div className={`${styles.joinNowNavbar} ${styles.hvrj}`}>
                        <span>Join Now</span>
                        <ForwardIcon />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
