import React, { useState } from 'react';
import styles from './Navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ForwardIcon from '@mui/icons-material/Forward';
import { Link, useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu'; // Import the hamburger icon
import CloseIcon from '@mui/icons-material/Close'; // Import close icon for toggling

function Navbar() {
    const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
    const location = useLocation();

    const isActive = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.left}>
                <img
                    className={styles.logo}
                    src='https://res.cloudinary.com/dkasinto0/image/upload/v1726806341/logo-Ve-Minds_bfc8ut.jpg'
                    alt='Vemind Logo'
                />
                <h2 className={styles.title}>veminds</h2>
            </div>
            <div className={`${styles.right} ${menuOpen ? styles.showMenu : ''}`}>
                <Link className={`${styles.link} ${isActive('/') ? styles.active : ''}`} to={'/'}>
                    <span className={styles.hvr}>Home</span>
                </Link>

                <div
                    className={styles.coursesLink}
                    onMouseEnter={() => setShowCoursesDropdown(true)}
                    onMouseLeave={() => setShowCoursesDropdown(false)}
                >
                    <Link className={`${styles.link} ${isActive('/courses') ? styles.active : ''}`} to={'/courses'}>
                        <span className={styles.hvr}>Courses</span>
                    </Link>
                    <ArrowDropDownIcon sx={{ color: 'white' }} />

                    {showCoursesDropdown && (
                        <div className={styles.coursesDropdown}>
                            <ul>
                                <a href='/Courses#fullStack'>
                                    <li>MERN Full Stack</li>
                                </a>
                                <a href='/Courses#dataAnalysis'>
                                    <li>Data Analysis</li>
                                </a>
                                <a href='/Courses#dataScience'>
                                    <li>Data Science</li>
                                </a>
                            </ul>
                        </div>
                    )}
                </div>

                <Link className={`${styles.link} ${isActive('/contact') ? styles.active : ''}`} to={'/contact'}>
                    <span className={styles.hvr}>Contact</span>
                </Link>

                <Link className={styles.link} to={'/signUp'}>
                    <div className={`${styles.joinNowNavbar} ${styles.hvrj}`}>
                        <span>Join Now</span>
                        <ForwardIcon />
                    </div>
                </Link>
            </div>

            {/* Hamburger Menu Icon */}
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <CloseIcon sx={{ color: 'white' }} /> : <MenuIcon sx={{ color: 'white' }} />}
            </div>
        </div>
    );
}

export default Navbar;
