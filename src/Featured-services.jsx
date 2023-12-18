const FeaturedServices = () => {
  return (
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
  );
};

export default FeaturedServices;
