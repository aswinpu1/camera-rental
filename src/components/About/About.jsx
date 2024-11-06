import React from "react";
import CarPng from "../../assets/camcartoon.png";

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-mono"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              At <span className="text-2xl font-bold font-sans">
        Cam<span className="text-yellow-500">Mart</span>
    </span>, we are passionate about helping photographers of all levels capture life’s moments in stunning detail. Founded on a love for visual storytelling, our store offers a comprehensive selection of cameras, lenses, and accessories for everyone—from beginners capturing their first memories to professionals pushing the limits of their craft.
              </p>
              <p data-aos="fade-up">
              We believe that the right tools make all the difference in transforming visions into breathtaking images, and we’re committed to supporting photographers in every step of their journey.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
