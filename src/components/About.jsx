import React from "react";

import transformImageDesktop from "../images/desktop/image-transform.jpg";
import transformImageMobile from "../images/mobile/image-transform.jpg";

import standOutImageDesktop from "../images/desktop/image-stand-out.jpg";
import standOutImageMobile from "../images/mobile/image-stand-out.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <section className="about__section">
        <div className="about__section_description">
          <h2 className="serif">Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#" className="serif">
            LEARN MORE
          </a>
        </div>

        <img
          src={
            window.innerWidth > 500
              ? transformImageDesktop
              : transformImageMobile
          }
          alt="a picture of an egg"
        />
      </section>

      <section className="about__section">
        <img
          src={
            window.innerWidth > 500 ? standOutImageDesktop : standOutImageMobile
          }
          alt="a picture of an upside down bell"
        />

        <div className="about__section_description">
          <h2 className="serif">Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="#" className="serif">
            LEARN MORE
          </a>
        </div>
      </section>
    </section>
  );
};

export default About;
