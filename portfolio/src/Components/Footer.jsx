import React from 'react';
import styles from './Css/Footer.module.css';


function Footer() {
    return (
        <div className={styles.footerCont}>

            <div className={styles.titleHeader} data-aos="fade-right">Get In Touch</div>
            <div className={styles.line} data-aos="fade-left"></div>


            <div className={styles.socialMediaLinks}>
                <a href="https://www.linkedin.com/in/vivek0003/" target="_blank">
                    <i style={{ color: "#0B66C3" }} className="ri-linkedin-box-fill"></i>
                </a>
                <a href="https://github.com/info-vivekranjan" target="_blank">
                    <i style={{ color: "black" }} className="ri-github-fill"></i>
                </a>

                <a href="https://twitter.com/vivekranjan0003" target="_blank">
                    <i style={{ color: "#1DA1F2" }} className="ri-twitter-fill"></i>
                </a>

            </div>

            <div className={styles.footerContacts}>

                <a href="https://goo.gl/maps/e2bkN5VpvqkbCogR7" target="_blank">
                    <i class="ri-map-pin-fill">
                        Jamshedpur
                    </i>
                </a>

                <a href="tel:+919156022914">
                    <i class="ri-phone-fill">
                        9156022914
                    </i>
                </a>

                <a href="mailto:vivek0003@hotmail.com" target="_blank">
                    <i class="ri-mail-open-fill">
                        vivek0003@hotmail.com
                    </i>
                </a>
            </div>

        </div>
    )
}

export { Footer }