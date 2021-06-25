import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import WhoWeAreThree from "../../components/WhoWeAre/WhoWeAreThree";
import OurTeamThree from "../../components/Team/OurTeamThree";
import TabsIconSection from "../../components/Tabs/TabsIconSection";
import TestimonialsOne from "../../components/Testimonials/TestimonialsOne";
import BlogSlider from "../../components/Blog/BlogSlider";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import dataSlider from "../../data/Slider/creative-agency-data.json";

const CorporateBusiness = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Loader>
      <HeaderOne />
      <HeroSliderSection data={dataSlider} />
      <WhoWeAreThree />
      <Portfolio
        filter="true"
        layout="wide"
        columns="2"
        items="6"
        classAppend="pt-0"
      />
      <OurTeamThree />
      <TabsIconSection title="What We Offer" tagline="We Turn Heads" />
      <TestimonialsOne title="TESTIMONIALS" tagline="Happy clients" />
      <BlogSlider />
      <FooterOne />
    </Loader>
  );
};

export default CorporateBusiness;
