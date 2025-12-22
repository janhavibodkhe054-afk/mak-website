import AboutCombined from "../components/AboutCombined";
import AboutHero from "../components/AboutHero";
import AboutInfo from "../components/AboutInfo";
import React from "react";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import AboutVision from "../components/AboutVision";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutInfo />
      <AboutCombined />
      <AboutVision />
      <WhatMakesUsDifferent />

    </>
  );
};

export default About;
