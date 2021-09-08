import React, { useEffect, useRef, useState } from "react";
import styles from "./Css/HomePage.module.css";

import Particles from "react-particles-js";
import particles from "../data/particals.json";
import dp from "../img/profile_pic.png";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { SkillSet } from "./SkillSet";
import { GitHub } from "./GitHub";

import { useWindowScroll } from "react-use";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const openResume = () => {
  window.open(
    "https://drive.google.com/file/d/1Q3BONfXJs2EOSMQ2Z2i6H8b3kdfk1XB3/view?usp=sharing",
    "_blank"
  );
};

function HomePage() {
  const projRef = useRef("");
  const contactRef = useRef(null);
  const techStackRef = useRef(null);
  // const moveToUpRef = useRef(null);

  // const { y: pageYOffset } = useWindowScroll();

  // const [isVisible, setIsVisible] = useState(false)

  const gotToProjects = () => {
    window.scrollTo({
      top: projRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const gotoContact = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const goDowntoTechStack = () => {
    window.scrollTo({
      top: techStackRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // const moveToUpScroll = () => {
  //     window.scrollTo({
  //         top: moveToUpRef.current.offsetTop,
  //         behavior: "smooth"
  //     });
  // }

  // useEffect(() => {
  //     moveToUpScroll();
  // }, [])

  // useEffect(() => {
  //     if (pageYOffset > 300) {
  //         setIsVisible(true)
  //     } else {
  //         setIsVisible(false)
  //     }
  // }, [pageYOffset])

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.HomePageCont}>
        <div className={styles.particalCont}>
          <Particles height="105vh" width="100%" params={particles}></Particles>
        </div>

        <div className={styles.mainPageContent}>
          <div className={styles.dpImgCont}>
            <img src={dp} alt="profile_pic" />
          </div>

          <div className={styles.rightSidetextCont}>
            <div className={styles.sayingHey}>Hey,</div>

            <div className={styles.nameIntro}>
              I'm <span className={styles.bigIntroName}>Vivek Ranjan.</span>
            </div>
            <div className={styles.paraIntro}>
              An aspiring full stack web developer proficient in MERN stack.
              Actively seeking the opportunity to work with interdisciplinary
              teams and contribute to developing useful products within a
              company.
            </div>

            <div className={styles.btnCont}>
              <button
                style={{ marginLeft: "0px" }}
                className={styles.homePageThreeBtn}
                onClick={gotToProjects}
              >
                Projects
              </button>
              <button className={styles.homePageThreeBtn} onClick={gotoContact}>
                Contact
              </button>
              <button
                className={styles.homePageThreeBtn}
                onClick={() => openResume()}
              >
                Resume
              </button>
            </div>

            <div className={styles.arrowDownCont}>
              <div ref={techStackRef}></div>

              <i
                className="ri-arrow-down-s-line"
                onClick={goDowntoTechStack}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div ref={techStackRef}></div>
        <SkillSet />
      </div>

      <div>
        <div ref={projRef}></div>

        <Projects />
      </div>

      <div>
        <GitHub />
      </div>

      <div>
        <div ref={contactRef}></div>
        <Footer />
      </div>

      {/* <>

                {
                    isVisible &&
                    <div className={styles.moveToUp} onClick={moveToUpScroll} data-aos="fade-up">
                        <i class="ri-arrow-up-s-line"></i>
                    </div>

                }

            </> */}
    </div>
  );
}

export { HomePage };
