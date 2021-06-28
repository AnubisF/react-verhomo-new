import React, {forwardRef} from "react";
import Loader from "../../components/Loader/Loader";

const Kauppa = forwardRef(( props, ref ) => (
  <Loader>
    <section ref={ref}>
      <div className="container">
        <hr className="mb-50 mt-50" />
        <div className="row"
             data-aos={"fade-up"}
             data-aos-delay={200}
             data-aos-duration={1000}>
          <div className="col-md-6 mb-20 col-sm-6">
            <h2>Verhoilumateriaalit</h2>
            <p>
              <li>Laaja kangasvalikoima: Orient Occident, Henry Borg, Lauritzon’s ja Annala</li>
              <li>Nahat</li>
              <li>Keinonahat</li>
              <li>Venekuomukangas</li>
              <li>Vaahtomuovit</li>
              <li>Ylijäämä kangas ja nahkapalat, vanut ja vaahtomuovipalat askarteluun</li>
            </p>
          </div>
          <div className="col-md-6 mb-20 col-sm-6">
            <h2>Verhoilutarvikkeet</h2>
            <p>
              <li>Napit</li>
              <li>Meriheinä</li>
              <li>PL-vanu</li>
              <li>Harmaavanu</li>
              <li>Langat</li>
              <li>Sitomalanka</li>
              <li>Jouset</li>
              <li>Koristenaulat</li>
              <li>Koristenauhat</li>
              <li>Satulavyöt</li>
              <li>Kumivyöt</li>
              <li>Vetoketjut metreittäin</li>
              <li>Juuttikangas</li>
              <li>Myös paljon muita verhoilutarvikkeita tilauksesta</li>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Loader>
));

export default Kauppa;
