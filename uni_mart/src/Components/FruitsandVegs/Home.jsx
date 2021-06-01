import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../Footer';
import styles from './Home.module.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function HomePage() {
    return (
        <div style={{ marginTop: "80px" }}>

            <AliceCarousel autoPlay={true} autoPlayInterval="2000" infinite={true} keyboardNavigation={true} >


                <Link to="/fruitsandvegs/12">
                    <div className={styles.homePageMainAdd}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621012283_mumbaiweb.jpg" alt="TodaysBigOffer" />
                    </div>
                </Link>
                <Link to="/snacks">
                    <div className={styles.homePageMainAdd}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1614274469_15w.jpg" alt="TodaysBigOffer" />
                    </div>
                </Link>
                <Link to="/staples/6">
                    <div className={styles.homePageMainAdd}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620488590_riceweb.jpg" alt="TodaysBigOffer" />
                    </div>
                </Link>
                <Link to="/fruitsandvegs/3">
                    <div className={styles.homePageMainAdd}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1621437879_w.jpg" alt="TodaysBigOffer" />
                    </div>
                </Link>

            </AliceCarousel>

            <div className={styles.homePageMainCate}>



                <div className={styles.categoryPageImg}>
                    <Link className={styles.homepageCateLink} to="/fruitsandvegs">
                        <div>
                            <img src="https://www.jiomart.com/images/category/141/thumb/fruits-vegetables-20200520.png?v=1607022291" alt="FruitsHomeImg" />
                            <h3>Fruits and Vegetables</h3>
                        </div>
                    </Link>
                </div>

                <div className={styles.categoryPageImg}>
                    <Link className={styles.homepageCateLink} to="/dairyandbakery" >
                        <div>
                            <img src="https://www.jiomart.com/images/category/12/thumb/0-12.png?v=1607022291" alt="DairyHomeImg" />
                            <h3>Dairy and Bakery</h3>
                        </div>
                    </Link>
                </div>

                <div className={styles.categoryPageImg}>
                    <Link className={styles.homepageCateLink} to="/snacks">
                        <div>
                            <img src="https://www.jiomart.com/images/category/11/thumb/0-11.png?v=1607022291" alt="SnacksHomeImg" />
                            <h3>Snacks</h3>
                        </div>
                    </Link>
                </div>

                <div className={styles.categoryPageImg}>
                    <Link className={styles.homepageCateLink} to="/staples">
                        <div>
                            <img src="https://www.jiomart.com/images/category/13/thumb/staples-20200710.jpg?v=1607022291" alt="StaplesHomeImg" />
                            <h3>Staples</h3>
                        </div>
                    </Link>
                </div>


            </div>


            <div className={styles.homePageAdd}>
                <Link to="/snacks">
                    <div style={{ marginLeft: "8px" }} className={styles.homePageAddImg}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620057627_wm.jpg" alt="HomeSnack" />
                    </div>
                </Link>
                <Link to="/snacks/11">
                    <div className={styles.homePageAddImg}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620057369_melswm.jpg" alt="MaggiImg" />
                    </div>
                </Link>
                <Link to="/snacks">
                    <div style={{ marginLeft: "8px" }} className={styles.homePageAddImg}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1620487049_biscuitswebmini.jpg" alt="BiskitOffer" />
                    </div>
                </Link>
                <Link to="/snacks">
                    <div className={styles.homePageAddImg}>
                        <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1614274485_15wm.jpg" alt="snacksOffer" />
                    </div>
                </Link>
            </div>

            <div style={{ marginBottom: "30px" }}>
                <img style={{ width: "90%" }} src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1611339553_free_header.jpg" alt="freehomedel" />
            </div>


            <Footer />

        </div>
    );
}
export { HomePage }