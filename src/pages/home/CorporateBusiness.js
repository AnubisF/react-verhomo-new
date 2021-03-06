import React, {useEffect, useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./../../components/Loader/Loader";
import HeroSliderSection from "../../components/Hero/HeroSliderSection";
import WhoWeAreThree from "../../components/WhoWeAre/WhoWeAreEight";
import FooterOne from "../../components/Footer/FooterOne";
import Portfolio from "../../components/Portfolio/Portfolio";
import dataSlider from "../../data/Slider/creative-agency-data.json";
import HeaderTwo from "../../components/Header/HeaderTwo";
import OurServices from "../../components/OurServices/OurServices";
import serviceOneImg from "../../assets/images/onepage-bg-left.jpg";
import ContactUs from "../../components/ContactUs/ContactUs";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import GridColumns from "../elements/GridColumns";
import Kauppa from "../elements/Kauppa";


const CorporateBusiness = () => {
    const etusivu = useRef();
    const katariina = useRef();
    const palvelut = useRef();
    const offerrequest = useRef();
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
            case "offerrequest":
                offerrequest.current.scrollIntoView({behavior: "smooth"});
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
            <HeaderTwo scrollToSection={scrollToSection}/>
            <HeroSliderSection data={dataSlider} ref={etusivu}/>
            <GridColumns ref={katariina}/>
            <OurServices
                title="Mit?? me teemme"
                tagline="We develop big ideas that sell."
                serviceImg={serviceOneImg}
                ref={palvelut}
            />
            <WhoWeAreThree ref={offerrequest}/>
            <ClientsBrand/>
            <Portfolio
                filter="true"
                columns="4"
                layout="wide"
                space="true"
                ref={portfolio}
            />
            <Kauppa ref={kauppa}/>
            <ContactUs ref={yhteystiedot}/>
            <FooterOne/>
        </Loader>
    );
};

export default CorporateBusiness;
