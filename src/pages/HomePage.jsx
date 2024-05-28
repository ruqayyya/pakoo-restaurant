import React from "react";
import CustomSection from "../components/CustomSection";
import MySwiper from "../components/mySwipper";

// import Header from "../components/header";

const HomePage = () => {
  return (
    <>
      <CustomSection className={"homeSection"}>
      <MySwiper/>
      </CustomSection>
    </>
  );
};

export default HomePage;
