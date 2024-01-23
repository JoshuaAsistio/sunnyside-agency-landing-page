import React from "react";

import milkBottle from "../images/desktop/image-gallery-milkbottles.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import sugarCube from "../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <img src={milkBottle} alt="milk bottle" />
      <img src={orange} alt="orange" />
      <img src={cone} alt="cone" />
      <img src={sugarCube} alt="sugar cube" />
    </section>
  );
};

export default Gallery;
