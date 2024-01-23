import React from "react";

import arrowDown from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1 className="hero__title serif">WE ARE CREATIVES</h1>

      <img src={arrowDown} alt="down arrow" className="hero__arrow" />
    </section>
  );
};

export default Hero;
