import React from "react";
import CustomSection from "../components/CustomSection";
import MySwiper from "../components/mySwipper";
import About from "../components/About";

const HomePage = () => {
  return (
    <>
      <CustomSection className={"homeSection"}>
        <div className="Aboutsec">
          <About />
          <MySwiper />
        </div>
      </CustomSection>
    </>
  );
};

export default HomePage;
