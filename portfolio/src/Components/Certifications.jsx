import React from "react";
import styles from "./Css/Certifications.module.css";
import { data } from "../data/certications.js";

const Certifications = () => {
  return (
    <div className={styles.footerCont}>
      <div className={styles.titleHeader} data-aos="fade-right">
        Certifications
      </div>
      <div className={styles.line} data-aos="fade-left"></div>

      <div className={styles.mainProjectCont}>
        {data.map((item) => {
          return (
            <div className={styles.eachProjectCont} data-aos="zoom-in-up">
              <div className={styles.eachProjectImg}>
                <img src={item.img} alt={item.alt} />
              </div>
              <div className={styles.eachProjectHeading}>{item.heading}</div>
              <div>
                <div className={styles.projectBtnCont}>
                  <div className={styles.demoButton}>
                    <a href={`${item.demo}`} target="_blank">
                      Demo
                    </a>
                  </div>

                  <div className={styles.githubButton}>
                    <a href={`${item.link}`} target="_blank">
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
