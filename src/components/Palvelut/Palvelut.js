import React, {forwardRef} from "react";
import dataFeatures from "../../data/Palvelut/palvelut.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxPalvelut";
//import MaterialBrand from "../../components/ClientsBrand/MaterialBrand";

const Palvelut = forwardRef((props, ref) => (
    <section ref={ref}>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-20"
                     data-aos={"fade-up"}
                     data-aos-delay={250}
                     data-aos-duration={1000}>
                    <HeadingSection title="Palvelut" tagline="">
                    </HeadingSection>
                    <p>Verhoomo Katariina tarjoaa monipuoliset verhoilupalvelut ammattitaidolla Oulun Karjasillalla.
                        Verstaalla vanhat sekä nykypäivän modernit huonekalut saavat uudet ilmeet asiakkaiden toiveita
                        kunnioittaen.
                        Huonekalut päällystetään laadukkailla verhoilukankailla ja tarvittaessa huonekalujen
                        sisusmateriaalit uusitaan.
                        Verstaalla verhoillaan kodin tavallisten huonekalujen lisäksi myös julkisten tilojen
                        huonekaluja, kuten
                        toimistotuoleja, ravintolakalusteita, sekä pankkikalusteita. Pidämme huolen myös
                        ammattihuonekalujen verhoilemisesta,
                        kun kyseessä on hierontapöytä tai kampaamotuoli. Asuntovaunujen patjojen verhoilu onnistuu yhtä
                        mallikkaasti,
                        kuin vaikkapa veneen patjojen verhoilu ja venekuomun korjaus. Tyylihuonekalujen, kuten
                        K-tuolien,
                        Emma-tuolien ja Artekin vyötuolien, sekä nahkatuolien verhoilutyöt tehdään ammattitaidolla
                        kymmenien vuosien kokemuksella.
                        Perinteiset huonekalut verhoillaan perinteitä kunnioittaen. Jouset kunnostetaan tarvittaessa ja
                        ne sidotaan
                        uudelleen perinteisin menetelmin. Pehmusteet ja kangas uusitaan asiakkaan toivomuksen mukaan.
                        Erikoistyönä suunnittelemme
                        ja ompelemme suojahuppuja ammattikäyttöön. Jos vanha tai uudempikin vaate, ikkunaverho,
                        huonekalu, veneen tai moottoripyörän
                        penkin pehmuste kaipaa pientä tai suurta kunnostusta, olet tervetullut asioimaan.</p>
                </div>
            </div>
                <div className="row mt-50">
                    {dataFeatures.map((feature, i) => (
                        <FeatureBoxTwo
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            index={i}
                        >
                            {feature.text}
                        </FeatureBoxTwo>
                    ))}
                </div>
            </div>
    </section>
));

export default Palvelut;
