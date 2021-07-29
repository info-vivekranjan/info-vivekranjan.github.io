import React from 'react';

import { data } from '../data/projects.js';
import styles from './Css/Projects.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Projects() {




    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleHeader} data-aos="fade-right">Projects</div>
            <div className={styles.line} data-aos="fade-left"></div>


            <div className={styles.mainProjectCont} >

                {
                    data.map((item) => {
                        return <div className={styles.eachProjectCont} data-aos="zoom-in-up">

                            <div className={styles.eachProjectImg}>
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className={styles.eachProjectHeading}>
                                {item.heading}
                            </div>

                            <div className={styles.eachProjectDesc}>
                                {item.description}
                            </div>
                            <div>

                                <div className={styles.eachProjectTechStack}>
                                    {
                                        item.techStack.tech1 &&
                                        <div><img src={item?.techStack?.tech1} /></div>
                                    }

                                    {
                                        item.techStack.tech2 &&
                                        <div><img src={item?.techStack?.tech2} /></div>
                                    }

                                    {
                                        item.techStack.tech3 &&
                                        <div><img src={item?.techStack?.tech3} /></div>
                                    }

                                    {
                                        item.techStack.tech4 &&
                                        <div><img src={item?.techStack?.tech4} /></div>
                                    }

                                    {
                                        item.techStack.tech5 &&
                                        <div><img src={item?.techStack?.tech5} /></div>
                                    }

                                    {
                                        item.techStack.tech6 &&
                                        <div><img src={item?.techStack?.tech6} /></div>
                                    }

                                </div>

                                <div className={styles.projectBtnCont}>
                                    <div className={styles.demoButton}>
                                        <a href={`${item.demo}`} target="_blank">Demo</a>
                                    </div>

                                    <div className={styles.githubButton}>
                                        <a href={`${item.github}`} target="_blank">Github</a>
                                    </div>

                                    <div className={styles.videoButton}>
                                        <a href={`${item.video}`} target="_blank">Video</a>
                                    </div>

                                </div>


                            </div>

                        </div>
                    })
                }

            </div>

        </div>


    )
}

export { Projects }