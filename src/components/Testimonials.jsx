import React from "react";

import clientTestimonials from "./clients";

import ClientTestimonial from "./ClientTestimonial";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="serif testimonials__heading">CLIENT TESTIMONIALS</h2>

      <div className="testimonials__clients">
        {clientTestimonials.map((client) => {
          return (
            <ClientTestimonial
              name={client.name}
              testimonial={client.testimonial}
              jobTitle={client.jobTitle}
              img={client.avatar}
              key={client.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
