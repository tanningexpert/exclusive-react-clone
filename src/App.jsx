import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.css";
import Header from "./Header";
import MainMenu from "./Main-menu";
import FeaturedServices from "./Featured-services";

// http://localhost:5173/

function App() {
  return (
    <>
      <div id="topBanner">
        <h1 className="pageTitle">Jennifer C. Brooks, MD</h1>
        <p className="subTitle">Gynecology &amp; Aesthetics</p>
      </div>
      <MainMenu></MainMenu>
      {/*<img src="img/landingpageimg.jpeg" class="landingpageimg" alt="landing page image">*/}
      {/*BANNER*/}
      <div className="banner" />
      {/*TESTIMONIALS*/}
      <div className="testimonialWrapper">
        <p className="testimonialIntro">See what our patients are saying </p>
        <button className="testimonialButton">TESTIMONIALS</button>
      </div>
      {/*MANTRA*/}
      <h1 className="mantra">
        <span className="health">Health by Medicine</span>{" "}
        <span className="beauty">Beauty by Nature</span>
      </h1>
      <p className="intro">
        At Exclusively Gyn &amp; Aesthetics, we offer a wide range of services,
        from gynecological medicine, to non-invasive aesthetic procedures, that
        help our patients look and feel their best. Whether you want to improve
        your health, the quality of your skin or the shape of your body, our
        highly trained professionals will create a customized treatment plan
        that delivers superior results.
      </p>
      {/*FEATURED SERVICES*/}
      <FeaturedServices></FeaturedServices>
      {/*ABOUT US*/}
      <div className="aboutUsWrapper">
        <h1>About us</h1>
        <div className="aboutUsBody">
          <div className="aboutLeft">
            <img
              src="img/Staff - Dr. B Headshot White.jpg"
              className="providerPhoto"
            />
          </div>
          <div className="aboutRight">
            <p>
              <span className="aboutUsTitle">
                {" "}
                Jennifer C. Brooks MD, FACOG
              </span>
            </p>
            <p>
              What sets Dr. Brooks apart is her dedication to providing
              individualized services for every patient that enters her
              practice.
              <br />
              <br />
              Listening to her patients’ concerns, treating them with
              compassion, and collaborating with each patient to create a
              treatment plan according to their needs – that is her mission.
            </p>
          </div>
        </div>
      </div>
      {/*FOOTER*/}
      <div className="footer">
        <div className="footerWrapper">
          <div className="footerLeft">
            <p className="footerInfo">Office Location</p>
            <p>
              1001 12th Avenue Suite 150
              <br />
              Fort Worth, TX 76104
            </p>
            <br />
            <br />
            <p className="footerInfo">Business Hours</p>
            <p>
              Mon - Thurs
              <br />
              9:00 AM - 4:30 PM
            </p>
            <br />
            <br />
            <p className="footerInfo">Office Phone</p>
            <p>817-334-0562</p>
          </div>
          <div className="footerCenter">
            <p>
              <span className="freezeTitle">NEW PATIENT "FREEZE"</span>
              <br />
              Unfortunately, due to our high volume of established patients, we
              are not able to schedule new patients.
              <br />
              <br />
              We hope to re-open our patient list soon. To be placed on our
              waiting list, please fill out our RSVP form and we will happily
              reach out to you when appointments come available.
            </p>
          </div>
          <div className="footerRight">
            <p>
              Follow us for general health recommendations, updates, and
              exclusive discounts on our services
            </p>
          </div>
        </div>
      </div>
      {/* ICONS */}
    </>
  );
}

export default App;
