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
                <div className={styles.githubCont}>
                    <i class="ri-github-line"></i>
                </div>
                <div className={styles.dbCont}>
                    <i class="ri-database-2-line"></i>
                </div>
                <div className={styles.telegramCont}>
                    <i class="ri-telegram-line"></i>
                </div>
                <div className={styles.twitterCont}>
                    <i class="ri-twitter-line"></i>
                </div>
                <div className={styles.mailCont}>
                    <i class="ri-mail-line"></i>
                </div>
            </div>
        </div>
    );
}
export { Footer }