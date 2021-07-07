import React, {useEffect, useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import HeaderThree from "../../components/Header/HeaderThree";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import Palvelut from "../../components/Palvelut/Palvelut";
import Tarjous from "../../components/WhoWeAre/Tarjous";
import Portfolio from "../../components/Portfolio/Portfolio";
import dataSlider from "../../data/Slider/creative-agency-data.json";
import GridColumns from "../elements/GridColumns";
import ContactSimple from "../contact/ContactSimple";
import FooterOne from "../../components/Footer/FooterOne";

const KatarinaVerhoomo = () => {
    const etusivu = useRef();
    const katariina = useRef();
    const palvelut = useRef();
    const tarjouspyntö = useRef();
    const portfolio = useRef();
    const kauppa = useRef();
    const yhteystiedot = useRef();

    const scrollToSection = (e, content) => {
        e.preventDefault();
        switch (content) {
            case "etusivu":
                etusivu.current.scrollIntoView({behavior: "smooth"});
                break;
            case "katariina":
                katariina.current.scrollIntoView({behavior: "smooth"});
                break;
            case "palvelut":
                palvelut.current.scrollIntoView({behavior: "smooth"});
                break;
            case "tarjouspyntö":
                tarjouspyntö.current.scrollIntoView({behavior: "smooth"})
                break;
            case "portfolio":
                portfolio.current.scrollIntoView({behavior: "smooth"});
                break;
            case "kauppa":
                kauppa.current.scrollIntoView({behavior: "smooth"});
                break;
            case "yhteystiedot":
                yhteystiedot.current.scrollIntoView({behavior: "smooth"});
                break;
            default:

        }
    };

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Loader>
            <HeaderThree scrollToSection={scrollToSection}/>
            <HeroSliderSection data={dataSlider} ref={etusivu}/>
            <GridColumns ref={katariina} />
            <Palvelut ref={palvelut} />
            <Tarjous ref={tarjouspyntö}/>
            <Portfolio
                filter="true"
                columns="4"
                layout="wide"
                space="true"
                ref={portfolio}
            />
            <ContactSimple ref={yhteystiedot}/>
            <FooterOne/>
        </Loader>
    );
};

export default KatarinaVerhoomo;
