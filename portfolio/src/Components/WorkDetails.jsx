import React, { useState } from "react";
import "./Css/WorkDetails.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const WorkDetails = () => {
  return (
    <div className="workContainer">
      <div className="work-titleHeader" data-aos="fade-right">
        Experience
      </div>
      <div className="work-line" data-aos="fade-left"></div>

      <div className="mainWorkCont">
        <div className="timeline">
          <ul>
            <li>
              <div className="content">
                <h3>Sakha Global | Hybrid</h3>
                <h4 style={{ lineHeight: "0px" }}>Software Engineer</h4>
                <p>
                  Developed some of the frontend pages and wrote backend apis
                  for building health- checkup web app, Worked on another
                  project to handle the asset of an organization and working on
                  backend to write apis for mini-assessment web app.
                  Additionally, written unit test cases using chai and mocha for
                  the mini-assessment web app.
                </p>
                <p>
                  Got good exposure in React JS, Javascript, Node JS, Express
                  JS, MySql, Postgresql and MongoDB.
                </p>
              </div>
              <div className="time">
                <h4>Dec 2022 - Present</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Birdeye | Remote</h3>
                <h4 style={{ lineHeight: "0px" }}>
                  Software Frontend Engineer
                </h4>
                <p>
                  Worked on Birdeye's main website, developed some of the main
                  pages from which got a better understanding on React JS(SSR).
                </p>
                <p>
                  Got better exposure in React JS (Server Side Rendering),
                  Javascript.
                </p>
              </div>
              <div className="time">
                <h4>Sept 2022 - Nov 2022</h4>
              </div>
            </li>

            <li>
              <div className="content">
                <h3>Sakha Global | Remote</h3>
                <h4 style={{ lineHeight: "0px" }}>Software Engineer</h4>
                <p>
                  Developed frontend and wrote backend apis for building health-
                  tracking and web-scrapping based web application.
                  Additionally, written unit test cases using chai and mocha.
                </p>
                <p>
                  Got good exposure in React JS, Javascript, Node JS, Express
                  JS, SQL and MongoDB.
                </p>
              </div>
              <div className="time">
                <h4>Oct 2021 - Aug 2022</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
