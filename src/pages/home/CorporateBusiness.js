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
import Welcome from "../../components/WelcomeSection/Welcome";
import OurServices from "../../components/OurServices/OurServices";
import serviceOneImg from "../../assets/images/onepage-bg-left.jpg";
import ContactUs from "../../components/ContactUs/ContactUs";


const CorporateBusiness = () => {
    const etusivu = useRef();
    const katarina = useRef();
    const service = useRef();
    const portfolio = useRef();
    const kauppa = useRef();
    const yhteystiedot = useRef();

    const scrollToSection = (e, content) => {
        e.preventDefault();
        switch (content) {
            case "etusivu":
                etusivu.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "katarina":
                katarina.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "service":
                service.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "portfolio":
                portfolio.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "kauppa":
                kauppa.current.scrollIntoView({ behavior: "smooth" });
                break;
            case "yhteystiedot":
                yhteystiedot.current.scrollIntoView({ behavior: "smooth" });
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
      <HeroSliderSection data={dataSlider} ref={etusivu} />
        <Welcome title="Katarina" tagline="The way we work is fun" ref={katarina}>
            Verhoomo Katariina tarjoaa monipuoliset verhoilupalvelut ammattitaidolla Oulun Karjasillalla.
            Verstaalla vanhat sekä nykypäivän modernit huonekalut saavat uudet ilmeet asiakkaiden toiveita
            kunnioittaen. Huonekalut päällystetään laadukkailla verhoilukankailla ja tarvittaessa huonekalujen
            sisusmateriaalit uusitaan.
            Verstaalla verhoillaan kodin tavallisten huonekalujen lisäksi myös julkisten tilojen huonekaluja, kuten
            toimistotuoleja, ravintolakalusteita, sekä pankkikalusteita. Pidämme huolen myös ammattihuonekalujen
            verhoilemisesta, kun kyseessä on hierontapöytä tai kampaamotuoli. Asuntovaunujen patjojen verhoilu
            onnistuu yhtä mallikkaasti, kuin vaikkapa veneen patjojen verhoilu ja venekuomun korjaus.
            Tyylihuonekalujen, kuten K-tuolien, Emma-tuolien ja Artekin vyötuolien, sekä nahkatuolien verhoilutyöt
            tehdään ammattitaidolla kymmenien vuosien kokemuksella.
            Perinteiset huonekalut verhoillaan perinteitä kunnioittaen. Jouset kunnostetaan tarvittaessa ja ne sidotaan
            uudelleen perinteisin menetelmin. Pehmusteet ja kangas uusitaan asiakkaan toivomuksen mukaan.
            Erikoistyönä suunnittelemme ja ompelemme suojahuppuja ammattikäyttöön.
            Jos vanha tai uudempikin vaate, ikkunaverho, huonekalu, veneen tai moottoripyörän penkin
            pehmuste kaipaa pientä tai suurta kunnostusta, olet tervetullut asioimaan.
        </Welcome>
        <OurServices
            title="Mitä me teemme"
            tagline="We develop big ideas that sell."
            serviceImg={serviceOneImg}
            ref={service}
        />
      <WhoWeAreThree ref={portfolio} />
      <Portfolio
        filter="true"
        columns="4"
        layout="wide"
        space="true"
        ref={portfolio}
      />
        <ContactUs ref={yhteystiedot}/>
      <FooterOne />
    </Loader>
  );
};

export default CorporateBusiness;
