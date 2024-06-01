import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutPart">
      <div className="about">
        <p>
          {" "}
          Welcome to Pakoo restaurant. You can view the interior by turning the
          pictures.
        </p>
      </div>
      <NavLink to={"/menu"}>
        <button>menu</button>
      </NavLink>
    </div>
  );
};

export default About;
