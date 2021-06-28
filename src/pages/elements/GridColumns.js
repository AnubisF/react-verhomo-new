import React, {forwardRef} from "react";
import Loader from "../../components/Loader/Loader";

const GridColumns = forwardRef((props, ref ) => (
  <Loader>
    <section ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-20">
            <h2>Katariina</h2>
            <p>
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
              Perinteiset huonekalut verhoillaan perinteitä kunnioittaen. Jouset kunnostetaan tarvittaessa ja ne
              sidotaan
              uudelleen perinteisin menetelmin. Pehmusteet ja kangas uusitaan asiakkaan toivomuksen mukaan.
              Erikoistyönä suunnittelemme ja ompelemme suojahuppuja ammattikäyttöön.
              Jos vanha tai uudempikin vaate, ikkunaverho, huonekalu, veneen tai moottoripyörän penkin
              pehmuste kaipaa pientä tai suurta kunnostusta, olet tervetullut asioimaan.
            </p>
          </div>
        </div>
        <hr className="mb-50 mt-50" />
        <div className="row">
          <div className="col-md-6 mb-20 col-sm-6">
            <h2>Verhoilija</h2>
            <p>
              Katariina on koulutukseltaan ompelija ja verhoilija, hän työskenteli pitkään ompelijana suuressa
              muotitalossa. Muutettua Ouluun Katariina kouluttautui verhoilijaksi ja työskenteli Oulun
              tunnetussa verhoilu- ja entisöintiyrityksessä.
              Katariina perusti oman verhoomon vuonna 2012. Yrityksen palveluihin kuuluvat niin yksityisten
              kotien kuin julkisten tilojen, ravintoloiden ja konttorien kalustojen verhoilu niiden perinteisen
              tyylin mukaisesti. Perinteiseen verhoiluun kuuluu meriheinät, jousitukset, luonnonvanut ja
              pehmusteiden kohennukset, uudempiin vaahtomuovi ja polyesterivanu. Materiaalit ja kankaat
              valitaan kaluston iän, tyylin ja tietenkin myös asiakkaan mieltymyksen mukaan. Ennen työn
              aloittamista suoritetaan työkohteen kuntoarvio.
            </p>
          </div>
          <div className="col-md-6 mb-20 col-sm-6">
            <h2>Verhomo</h2>
            <p>
              Verhoilutyön ohessa verstaalla suoritetaan myös vaatteiden korjausompelu. Verstaalla ommellaan
              mm. asiakkaiden tuomat verhot, lyhennetään housujen lahkeet ja vaihdetaan vetoketjut.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Loader>
));

export default GridColumns;
