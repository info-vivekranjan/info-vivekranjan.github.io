import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import styles from './About.module.css'


function About() {


    const { theme } = useContext(ThemeContext);

    return (
        <div className={styles.aboutPageCont}>
            <div className={styles.aboutQA}>
                <div className={styles.question} style={{ color: theme.textColor }}>Are you official?</div>
                <div className={styles.answer}>No.</div>
            </div>

            <div className={styles.aboutQA}>
                <div className={styles.question} style={{ color: theme.textColor }}>
                    What are your sources? How is the data gathered for this project?
                </div>
                <div className={styles.answer}>
                    I have used some of the API provided by Postman and the API which is used by Worldometers, I will give the links of API's at Github readMe file. I would love it if you can use this data in the fight against this virus.
                </div>
            </div>

            <div className={styles.aboutQA}>
                <div className={styles.question} style={{ color: theme.textColor }}>
                    Where can I find the data for this?
                </div>
                <div className={styles.answer}>
                    All the data is available through an API for further analysis and development here : api.covid19india.org
                </div>
            </div>

            <div className={styles.aboutQA}>
                <div className={styles.question} style={{ color: theme.textColor }}>Who are you?</div>
                <div className={styles.answer}>
                    I am a student and learining Full stack web development from last three months.Recently I have learned some part of React so for learning purpose I made this website. It is an additional project which I have made for practice my concepts. I have chosed this topic for my project because we are living in difficult times and want to give my thought to this project.
                </div>
            </div>


        </div>
    );
}
export { About }