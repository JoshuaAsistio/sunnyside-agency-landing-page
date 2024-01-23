import React from "react";

const ClientTestimonial = ({ name, testimonial, jobTitle, img }) => {
  return (
    <div className="testimonials__clients_card">
      <img src={img} alt={`A picture of ${name.split(" ")[0]}`} />

      <p>{testimonial}</p>

      <div>
        <p className="serif">{name}</p>

        <p>{jobTitle}</p>
      </div>
    </div>
  );
};

export default ClientTestimonial;
