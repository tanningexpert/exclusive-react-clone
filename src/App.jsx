import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.css";
import Header from "./Header";

// http://localhost:5173/

function App() {
  return (
    <>
      <div id="topBanner">
        <h1 className="pageTitle">Jennifer C. Brooks, MD</h1>
        <p className="subTitle">Gynecology &amp; Aesthetics</p>
      </div>
      {/*MENU BAR*/}
      <nav className="menuBar">
        <div className="desktopMenuWrapper">
          <ul className="desktopMenu">
            <div className="homeDropDown">
              <li>
                <a href="index.html" className="homeDropDown desktopMenuItem">
                  Home
                </a>
              </li>
              <div className="homeDropDownContent">
                <a href="#">About</a>
                <a href="#">Reviews</a>
                <a href="#">Office Policies</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <div className="homeDropDown">
              <li>
                <a href="#" className="homeDropDown desktopMenuItem">
                  Gynecology
                </a>
              </li>
              <div className="homeDropDownContent">
                <a href="#">Gynecology Services</a>
                <a href="#">Hormone Replacement Therapy</a>
                <a href="#"> Weight Loss</a>
              </div>
            </div>
            <li>
              <a
                href="./pages/vaginalRejuvenation.html"
                className="desktopMenuItem"
              >
                Vaginal Rejuvenation
              </a>
            </li>
            <div className="homeDropDown">
              <li>
                <a
                  href="./pages/aesthetics.html"
                  className="homeDropDown desktopMenuItem"
                >
                  Aesthetics
                </a>
              </li>
              <div className="homeDropDownContent">
                <a href="#">Vaginal Rejuvenation</a>
                <a href="#">Cellulite Reduction</a>
                <a href="#">Stretch Mark Removal</a>
                <a href="#">Pre-Post- Care Instructions</a>
              </div>
            </div>
            <div className="homeDropDown">
              <li>
                <a
                  href="./pages/aesthetics.html"
                  className="homeDropDown desktopMenuItem"
                >
                  Patient Resources
                </a>
              </li>
              <div className="homeDropDownContent">
                <a href="#">Forms</a>
                <a href="#">Getting Your Lab Results</a>
                <a href="#">Financing</a>
              </div>
            </div>
            <li>
              <a href="#" className="desktopMenuItem">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* TABLET MENU */}
        <div className="tabletMenuWrapper">
          <div id="tabletMenuBtn">
            <ion-icon id="tabletMenuIcon" name="menu-outline" />
          </div>
          <ul id="tabletMenu">
            <li>Home</li>
            <li className="hasSubMenu">
              Gynecology
              <span className="downArrow">
                <ion-icon name="chevron-down-outline" />
              </span>
            </li>
            <ul className="subMenu">
              <li>Gyn Services</li>
              <li>Hormone Replacement</li>
              <li>Medical Weight Loss</li>
            </ul>
            <li>Vaginal Rejuvenation</li>
            <li className="hasSubMenu">
              Aesthetics
              <span className="downArrow">
                <ion-icon name="chevron-down-outline" />
              </span>
            </li>
            <ul className="subMenu">
              <li>Vaginal Rejuvenation</li>
              <li>Cellulite Reduction</li>
              <li>Stretch Mark Removal</li>
            </ul>
            <li className="hasSubMenu">
              Patient Resources
              <span className="downArrow">
                <ion-icon name="chevron-down-outline" />
              </span>
            </li>
            <ul className="subMenu">
              <li>Forms</li>
              <li>Lab Results </li>
              <li>Appointment Request</li>
            </ul>
            <li>Contact Us</li>
          </ul>
        </div>
        {/*MOBILE MENU*/}
        <div id="mobileMenuBtn">
          ME
          <br />
          NU
        </div>
        <div id="mobileMenuWithExitWrapper">
          <div id="mobileMenuExitBtn">X</div>
          <div id="mobileMenuWrapper">
            <ul>
              <li>
                <a href="index.html" className="dropbtn">
                  Home
                </a>
              </li>
              <div className="homeDropDownContent">
                <a href="#">About</a>
                <a href="#">Reviews</a>
                <a href="#">Office Policies</a>
                <a href="#">Blog</a>
              </div>
              <li>
                <a href="#" className="dropbtn">
                  Gynecology
                </a>
              </li>
              <div className="homeDropDownContent">
                <a href="#">Gynecology Services</a>
                <a href="#">Hormone Replacement Therapy</a>
                <a href="#"> Weight Loss</a>
              </div>
              <li>
                <a href="vaginalRejuvenation.html">Vaginal Rejuvenation</a>
              </li>
              <li>
                <a href="aesthetics.html">Aesthetics</a>
              </li>
              <li>
                <a href="#">Patient Resources</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/*END MOBILE MENU*/}
      </nav>
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
      <section className="featuredServices">
        <div className="featuredServiceWrapper">
          <h1>FEATURED SERVICES</h1>
          <div className="featuredServiceBody">
            <div className="hormoneReplacementWrapper">
              <img
                src="img/Service Menu Images/Hormone Pellet Therapy (2).jpg"
                className="featuredServiceImg"
              />
              <h2> HORMONE REPLACEMENT</h2>
              <ul>
                <li>Increase Energy</li>
                <li>Increase Weight Loss</li>
                <li>Hormone Pellet Therapy</li>
              </ul>
            </div>
            <div className="vaginalRejuvenationWrapper">
              <img
                src="img/Service Menu Images/Vaginal Rejuvenation 1.jpg"
                className="featuredServiceImg"
              />
              <h2> VAGINAL REJUVENATION</h2>
              <ul>
                <li>Pain During Sex</li>
                <li>Vaginal Dryness</li>
                <li>Vaginal Tightening</li>
              </ul>
            </div>
            <div className="medicalWeightlossWrapper">
              <img
                src="img/Service Menu Images/Kybella - Dissolve Fat.jpg"
                className="featuredServiceImg"
              />
              <h2> MEDICAL WEIGHTLOSS</h2>
              <ul>
                <li>Lose Fat</li>
                <li>Improve Health</li>
                <li>Maintain Results</li>
              </ul>
            </div>
          </div>
          <br />
          <button className="blueButton">View All Services</button>
          <br />
          <br />
          <button className="blueButton">Request An Appointment</button>
        </div>
      </section>
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
