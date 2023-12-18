const MainMenu = () => {
  return (
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
  );
};

export default MainMenu;
