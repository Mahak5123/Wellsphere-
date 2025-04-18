import React, { useEffect, useRef } from "react";
import './index.css';  // Ensure your styles are included here
import lottie from "lottie-web";  // Import the Lottie library

const About = () => {
  const animationContainer = useRef(null);  // Create a reference for the animation container

  useEffect(() => {
    // Load the Lottie animation when the component mounts
    const animation = lottie.loadAnimation({
      container: animationContainer.current,  // Use the ref instead of getElementById
      renderer: "svg",  // Render as SVG
      loop: true,  // Keep the animation looping
      autoplay: true,  // Start animation automatically
      path: "/img/Animation - 1741106360919.json"  // Path to the Lottie JSON file (ensure it's in the public folder)
    });

    // Clean up the animation when the component unmounts
    return () => {
      animation.destroy();  // Destroy the animation instance when the component is removed
    };
  }, []);  // Empty dependency array means this effect runs only once after the initial render

  return (
    <section className="about">
      <div className="container">
        <header className="section-header">
          <h3>About Us</h3>
          <p>
            "At WellSphere, we are dedicated to revolutionizing healthcare by
            providing seamless access to AI-powered health insights, expert
            guidance, and personalized wellness solutions. Our mission is to
            empower individuals with the tools they need to take charge of their
            health effortlessly."
          </p>
        </header>

        <div className="row align-items-center about-row">
          <div className="col-md-6">
            {/* Lottie Animation container */}
            <div
              ref={animationContainer}  // Attach the ref here
              style={{ width: "100%", height: "500px" }}  // You can adjust the size as needed
            ></div>
          </div>
          <div className="col-md-6">
            <h2 className="title">Welcome to Our Site</h2>
            <p>
              "Your Health, Our Priority – Empowering You to Live Better Every
              Day."
              <br />
              <br />
              At WellSphere, we believe that good health is the foundation of a
              fulfilling life. Our platform is designed to provide you with the
              tools, insights, and expert support needed to make informed health
              decisions. From daily wellness tracking to expert consultations,
              we’re here to guide you on your journey to a healthier, happier
              you.
            </p>
          </div>
        </div>

        {/* Your mission, vision, and objective sections */}
        <div className="row about-cols">
          <div className="col-md-4">
            <div className="about-col">
              <div className="img">
                <img
                  src="img/about-mission.jpg"
                  alt="About Mission"
                  className="img-fluid"
                />
                <div className="icon">
                  <i className="ion-ios-disc"></i>
                </div>
              </div>
              <h2 className="title">Our Mission</h2>
              <ul>
                <li>Provide medical aid and health education to children.</li>
                <li>Support elderly women with accessible healthcare.</li>
                <li>Assist underprivileged individuals with medical resources.</li>
                <li>Raise funds to connect donors with meaningful healthcare causes.</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-col">
              <div className="img">
                <img
                  src="img/about-vision.jpg"
                  alt="About Vision"
                  className="img-fluid"
                />
                <div className="icon">
                  <i className="ion-ios-eye"></i>
                </div>
              </div>
              <h2 className="title">Our Vision</h2>
              <p>
                At WellSphere, we envision a world where quality healthcare is
                accessible to all, regardless of age, gender, or financial
                status. We strive to create a healthier and more compassionate
                society by leveraging technology and community support to uplift
                children, underprivileged individuals, elderly women, and those in
                need.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-col">
              <div className="img">
                <img
                  src="img/about-objective.jpg"
                  alt="About Objective"
                  className="img-fluid"
                />
                <div className="icon">
                  <i className="ion-ios-options"></i>
                </div>
              </div>
              <h2 className="title">Our Objective</h2>
              <ul>
                <li>Offer free/affordable healthcare to vulnerable communities.</li>
                <li>Build a network of healthcare professionals & volunteers.</li>
                <li>Facilitate transparent fundraising for medical emergencies.</li>
                <li>Advocate for healthcare equality for all.</li>
                <li>Leverage technology for remote healthcare.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
