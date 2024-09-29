import React, { useState } from 'react';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ForwardIcon from '@mui/icons-material/Forward';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Navbar() {
    const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);

    return (
        <div className={`${styles.mainContainer}`}>
            <div className={styles.left}>
                <img className={styles.logo} src='https://res.cloudinary.com/dkasinto0/image/upload/v1726806341/logo-Ve-Minds_bfc8ut.jpg' alt='Vemind Logo' />
                <h2 className={styles.title}>veminds</h2>
            </div>
            <div className={`${styles.right}`}>
                <Link className={styles.link} to={'/'}>
                    <span className={styles.hvr}>Home</span>
                </Link>
                <Link className={styles.link} to={'/about'}>
                    <span className={styles.hvr}>Build Resume</span>
                </Link>

                {/* Courses link with hover dropdown */}
                <div
                    className={styles.coursesLink}
                    onMouseEnter={() => setShowCoursesDropdown(true)}
                    onMouseLeave={() => setShowCoursesDropdown(false)}
                >
                    <Link className={styles.link} to={'/courses'}>
                        <span className={styles.hvr}>Courses <ArrowDropDownIcon /></span>
                    </Link>

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

                <Link className={styles.link} to={'/explore'}>
                    <span className={styles.hvr}>Explore <ArrowDropDownIcon /></span>
                </Link>
                <Link className={styles.link} to={'/contact'}>
                    <span className={styles.hvr}>Contact</span>
                </Link>

                <Link className={styles.link} to={'/signUp'}>
                    <div className={`${styles.joinNowNavbar}  ${styles.hvrj}`}>
                        <span>Join Now</span>
                        <ForwardIcon />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
