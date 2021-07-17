import React, { useRef } from 'react';
import styles from './Css/HomePage.module.css'

import Particles from 'react-particles-js';
import particles from '../data/particals.json';
import dp from '../img/profile_pic.png'
import { Projects } from './Projects';
import { Footer } from './Footer';
import { SkillSet } from './SkillSet';
import { GitHub } from './GitHub';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const openResume = () => {
    window.open("https://drive.google.com/file/d/1sZEiO7hfMPm_Dz9qR_SsCiRiksAGvOyE/view?usp=sharing", "_blank");

}


function HomePage() {

    const projRef = useRef("");
    const contactRef = useRef(null)
    const techStackRef = useRef(null);

    const gotToProjects = () => {
        window.scrollTo({
            top: projRef.current.offsetTop,
            behavior: "smooth"
        });
    }


    const gotoContact = () => {
        window.scrollTo({
            top: contactRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    const goDowntoTechStack = () => {
        window.scrollTo({
            top: techStackRef.current.offsetTop,
            behavior: "smooth"
        })
    }


    return (
        <>
            <div className={styles.HomePageCont}>
                <div className={styles.particalCont}>
                    <Particles height="115vh" width="100%" params={particles}></Particles>

                </div>


                <div className={styles.mainPageContent} >


                    <div className={styles.dpImgCont}>
                        <img src={dp} alt="profile_pic" />

                    </div>


                    <div className={styles.rightSidetextCont}>

                        <div className={styles.sayingHey}>
                            Hey,
                        </div>

                        <div className={styles.nameIntro}>I'm Vivek Ranjan.</div>
                        <div className={styles.paraIntro}>
                            An aspiring full stack web developer proficient in MERN stack. If you are looking for a curious, acountable and adaptible team player. Then, I'm the one for the job.
                        </div>

                        <div className={styles.btnCont}>

                            <button style={{ marginLeft: "0px" }} className={styles.homePageThreeBtn} onClick={gotToProjects}>Projects</button>
                            <button className={styles.homePageThreeBtn} onClick={gotoContact}>Contact</button>
                            <button className={styles.homePageThreeBtn} onClick={() => openResume()}>Resume</button>

                        </div>

                        <div className={styles.arrowDownCont}>
                            <div ref={techStackRef}></div>

                            <i className="ri-arrow-down-s-line" onClick={goDowntoTechStack}></i>
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


        </>
    )
}

export { HomePage }