import React from "react";
import CustomSection from "../components/CustomSection";

import About from "../components/About";
import MySwiper from "../components/mySwipper";

const HomePage = () => {
  return (
    <CustomSection className="homeSection" isFlex={false}>
      <div className="Aboutsec">
        <About />
        <MySwiper/>
      </div>
    </CustomSection>
  );
};

export default HomePage;
