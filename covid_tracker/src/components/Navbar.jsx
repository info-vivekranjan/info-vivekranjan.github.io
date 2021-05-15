import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContextProvider';
import styles from './Navbar.module.css'



const links = [
    {
        to: "/",
        title: "Home",
        icon: <i class="ri-home-7-line"></i>
    },
    {
        to: "/state-wise-cases",
        title: "State wise case",
        icon: <i class="ri-survey-line"></i>
    },
    {
        to: "/information",
        title: "Information",
        icon: <i class="ri-book-line"></i>
    },
    {
        to: "/about",
        title: "About",
        icon: <i class="ri-questionnaire-line"></i>
    },
    {
        to: "/resources",
        title: "Resources",
        icon: <i class="ri-phone-line"></i>
    }
]


function Navbar() {

    const { currentTheme, toggleTheme, theme } = useContext(ThemeContext);



    return (
        <div className={styles.navbarCont} style={{ backgroundColor: theme.navBackground }}>
            <div className={styles.covidLogoCont}>
                <Link to="/" className={styles.covidLogo}>Covid<br /> <span className={styles.covidLogoTracker}>Tracker</span></Link>
            </div>
            {
                links.map((item) => {
                    return <div className={styles.navItem}>
                        <Link to={item.to} className={styles.navLink}>
                            <div className={styles.navIcon}>
                                {item.icon}
                            </div>

                            <div className={styles.linkText} style={{ color: theme.textColor }}>{item.title}</div>
                        </Link>

                    </div>
                })
            }
            <div className={styles.lightModeCont}>
                {
                    currentTheme === "light" &&
                    <i onClick={toggleTheme} className="ri-moon-line"></i>
                }
            </div>

            <div className={styles.darkModeCont}>
                {
                    currentTheme === "dark" &&
                    <i onClick={toggleTheme} className="ri-sun-line"></i>
                }
            </div>
        </div>
    );
}

export { Navbar }
