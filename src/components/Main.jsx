import React from "react";

import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const Main = () => {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
    </main>
  );
};

export default Main;
