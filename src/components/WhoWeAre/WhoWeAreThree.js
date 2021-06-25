import React from "react";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";

const WhoWeAreThree = () => (
  <section>
    <div className="container">
      <div className="row">
        <HeadingSection title="Verhoomo Katariina" tagline="">
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
        </HeadingSection>
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
);

export default WhoWeAreThree;