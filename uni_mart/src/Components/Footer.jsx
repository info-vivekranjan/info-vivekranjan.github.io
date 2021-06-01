import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
    return (

        <div className={styles.footerCont}>
            <div className={styles.footerTitle}>Uni Mart</div>
            <div className={styles.footerPara}>You can find most of things for which you are craving</div>

            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ margin: "20px" }}>
                    <a style={{ textDecoration: "none", color: "black", fontWeight: "500" }} href="https://www.instagram.com/" target="_noblank">FAQ</a>
                    <div style={{ fontSize: "12px" }}>Terms and conditions</div>
                    <div style={{ fontSize: "12px" }}>Privacy policy</div>
                    <div style={{ fontSize: "12px" }}>E-waste Policy</div>
                </div>

                <div style={{ margin: "20px" }}>
                    <div style={{ color: "black", fontWeight: "500" }} >MOST POPULAR CATEGORIES</div>
                    <Link to="/fruitsandvegs" style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "12px" }}  >Fruits and Vegetables</Link>
                    <br />
                    <Link to="/dairyandbakery" style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "12px" }}  >Dairy and Bakery</Link>
                    <br />
                    <Link to="/snacks" style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "12px" }}  >Snacks</Link>
                    <br />
                    <Link to="/staples" style={{ textDecoration: "none", color: "black", fontWeight: "500", fontSize: "12px" }}  >Staples</Link>
                </div>

                <div style={{ margin: "20px" }}>
                    <Link style={{ textDecoration: "none", color: "black", fontWeight: "500" }} to="/contactus">
                        CONTACT US
                    </Link>
                    <div style={{ fontSize: "12px" }}>WhatsApp at : 7531591234</div>
                    <div style={{ fontSize: "12px" }}>Call Us at : 1800 890 1222</div>
                </div>
            </div>

            <div className={styles.footerIconCont}>
                <a href="https://www.instagram.com/" target="_noblank" className={styles.githubCont}>
                    <i class="ri-instagram-line"></i>
                </a>
                <a href="https://www.facebook.com/" target="_noblank" className={styles.dbCont}>
                    <i class="ri-facebook-box-line"></i>
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