import React, {forwardRef} from "react";
import Loader from "../../components/Loader/Loader";

const GridColumns = forwardRef((props, ref ) => (
  <Loader>
    <section ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-20"
               data-aos={"fade-up"}
               data-aos-delay={200}
               data-aos-duration={1000}>
            <h2>Katariina</h2>
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
        </div>
      </div>
    </section>
  </Loader>
));

export default GridColumns;
