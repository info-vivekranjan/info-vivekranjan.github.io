import React from 'react';
import { Footer } from '../Footer/Footer';
import styles from './Information.module.css'


function CovidInformation() {



    return (

        <div className={styles.wholeInfoCont}>
            <h2 style={{ marginTop: "0", color: "#007BFF", paddingTop: "30px" }}>Important Information !</h2>


            <div>

                <h3 style={{ color: "#6C757D", textAlign: "left", paddingLeft: "150px" }}>Blogs Q/A & News {">>"}</h3>

                <div className={styles.blogCont}>

                    <a href="https://cleartax.in/s/covid-19-diagnosis-and-management-guide" className={styles.singleBlogDiv}>

                        <p style={{ color: "#6C757D" }}> Covid-19 FAQ</p>

                        <img src="https://assets1.cleartax-cdn.com/s/img/2021/04/28135347/Screenshot-2021-04-28-at-12.56.27-PM-1024x859.png" alt='covid-19-blog1' style={{ width: "100%", height: "300px" }} />
                    </a>

                    <a href="https://www.mohfw.gov.in/covid_vaccination/vaccination/questions-and-answers.html" className={styles.singleBlogDiv}>

                        <p> Covid-19 QA about Vaccination</p>

                        <img src="https://www.mohfw.gov.in/covid_vaccination/vaccination/dist/images/qna/qna-2.jpg" alt='covid-19-blog2' style={{ width: "100%", height: "300px" }} />
                    </a>

                    <a href="https://www.mohfw.gov.in/covid_vaccination/vaccination/common-side-effects-aefi.html" className={styles.singleBlogDiv}>

                        <p> Common side-effects of vaccination</p>

                        <img src="https://www.mohfw.gov.in/covid_vaccination/vaccination/dist/images/vaccine-infographic-desktop.jpg" alt='covid-19-blog3' style={{ width: "100%", height: "300px" }} />
                    </a>

                    <a href="https://www.bbc.com/news/world-asia-india-55748124" className={styles.singleBlogDiv}>

                        <p> What we know about India's Covid-19 vaccines</p>

                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/852A/production/_116609043_gettyimages-1230630497.jpg" alt='covid-19-blog4' style={{ width: "100%", height: "300px" }} />
                    </a>



                </div>


            </div>





            <div>

                <h3 style={{ color: "#6C757D", textAlign: "left", paddingLeft: "150px" }}>Detailed explanatory videos {">>"}</h3>

                <div className={styles.ytVideoCont}>



                    <div className={styles.iframeDiv}>

                        <p>Prone Breathing Technique - The Quint</p>
                        <iframe src='https://www.youtube.com/embed/rj-_9nTej8g'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}
                        />
                    </div>

                    <div className={styles.iframeDiv}>

                        <p>Break the chain of transmission (in Hindi) - WHO</p>
                        <iframe src='https://www.youtube.com/embed/Ld4fUV_PjPk'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}
                        />
                    </div>


                    <div className={styles.iframeDiv}>
                        <p>Corona virus के अहम लक्षण पहचाने और घर पर कैसे ठीक करे? - MEDANTA</p>

                        <iframe src='https://www.youtube.com/embed/xaAqg9ycvQo'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}
                        />

                    </div>


                    <div className={styles.iframeDiv}>
                        <p>WHO’s Science in 5 on COVID-19: safe care at home - WHO</p>
                        <iframe src='https://www.youtube.com/embed/MEg-vYTsEVc'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}

                        />

                    </div>

                    <div className={styles.iframeDiv}>
                        <p>RT-PCR Test, How Pulse-Oximeter Works and Recovery From Corona</p>
                        <iframe src='https://www.youtube.com/embed/fCIkF6tlKUU'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}

                        />

                    </div>

                    <div className={styles.iframeDiv}>
                        <p>How Vaccine Work | Which Vaccine is Better - Khan Sir </p>
                        <iframe src='https://www.youtube.com/embed/B1Jz_qsA-DM'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}

                        />

                    </div>

                    <div className={styles.iframeDiv}>
                        <p>How to wear masks - AIIMS, Delhi </p>
                        <iframe src='https://www.youtube.com/embed/lsrFuZpUJRU'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}

                        />

                    </div>

                    <div className={styles.iframeDiv}>
                        <p>COVID Appropriate Behaviour - AIIMS, Delhi </p>
                        <iframe src='https://www.youtube.com/embed/-8VU_bpfHi8'
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            style={{ width: "100%", height: "350px" }}

                        />

                    </div>


                </div>


            </div>


            <Footer />

        </div>


    );
}
export { CovidInformation }