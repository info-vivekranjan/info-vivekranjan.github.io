import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import styles from './Footer.module.css';



function Footer() {


    const { theme } = useContext(ThemeContext);


    return (
        <div className={styles.footerCont}>
            <div className={styles.footerTitle} style={{ backgroundColor: theme.resourcesBG }}>COVID TRACKER</div>
            <div className={styles.footerPara} style={{ color: theme.textColor }}>I thank everyone fighting on the frontlines</div>
            <div className={styles.footerIconCont}>
                <a href="https://github.com/info-vivekranjan/info-vivekranjan.github.io/tree/main/covid_tracker" target="_noblank" className={styles.githubCont}>
                    <i class="ri-github-line"></i>
                </a>
                <a href="https://github.com/info-vivekranjan/info-vivekranjan.github.io/tree/main/covid_tracker#apis" target="_noblank" className={styles.dbCont}>
                    <i class="ri-database-2-line"></i>
                </a>
                <a href="https://t.me/covidTrackerOfficial" target="_noblank" className={styles.telegramCont}>
                    <i class="ri-telegram-line"></i>
                </a>
                <a href="#" target="_noblank" className={styles.twitterCont}>
                    <i class="ri-twitter-line"></i>
                </a>
                <a href="mailto:infovivek.ranjan@gmail.com" target="_noblank" className={styles.mailCont}>
                    <i class="ri-mail-line"></i>
                </a>
            </div>
        </div>
    );
}
export { Footer }