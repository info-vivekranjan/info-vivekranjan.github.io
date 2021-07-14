import React from 'react';
import styles from './Css/Skillset.module.css';

import htmlLogo from '../img/logo/html5.svg';
import cssLogo from '../img/logo/css3.svg';
import jsLogo from '../img/logo/js.svg';
import reactLogo from '../img/logo/react.svg';
import reduxLogo from '../img/logo/redux.svg';
import materialUiLogo from '../img/logo/materialUI.svg';

import tsLogo from '../img/logo/ts.svg';
import nodejsLogo from '../img/logo/nodejs.svg';
import expressjsLogo from '../img/logo/expressjs.svg';
import reactRouterLogo from '../img/logo/reactRouter.svg';
import mongoLogo from '../img/logo/mongodb.svg';
import gitLogo from '../img/logo/git.svg';

function SkillSet() {
    return (
        <div style={{ paddingTop: "70px" }}>
            <h1 style={{ fontSize: "40px", color: "#262626" }}>Tech Stack</h1>

            <div>

                <div className={styles.firstRowCont}>

                    <div className={styles.eachLogoCont}>
                        <img src={htmlLogo} alt="Html" />
                        <div>HTML</div>
                    </div>
                    <div className={styles.eachLogoCont}>
                        <img src={cssLogo} alt="Css" />
                        <div>CSS</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={jsLogo} alt="JavaScript" />
                        <div>JAVASCRIPT</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={reactLogo} alt="React" />
                        <div>REACT</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={reduxLogo} alt="Redux" />
                        <div>REDUX</div>
                    </div>


                    <div className={styles.eachLogoCont}>
                        <img src={materialUiLogo} alt="Material UI" />
                        <div>MATERIAL UI</div>
                    </div>



                </div>


                <div className={styles.secondRowCont}>

                    <div className={styles.eachLogoCont}>
                        <img src={nodejsLogo} alt="Node Js" />
                        <div>NODE JS</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={expressjsLogo} alt="Express Js" />
                        <div>EXPRESS JS</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={tsLogo} alt="TypeScript" />
                        <div>TYPESCRIPT</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={reactRouterLogo} alt="React Router" />
                        <div style={{ paddingBottom: "6px" }}></div>
                        <div>REACT ROUTER</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={mongoLogo} alt="Mongodb" />
                        <div>MOBGO DB</div>
                    </div>

                    <div className={styles.eachLogoCont}>
                        <img src={gitLogo} alt="Mongodb" />
                        <div>GIT</div>
                    </div>



                </div>


            </div>

        </div>
    )
}

export { SkillSet }