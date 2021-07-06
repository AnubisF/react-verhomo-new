import React, {forwardRef} from "react";
import Loader from "../../components/Loader/Loader";

const Kauppa = forwardRef((props, ref) => (
    <Loader>
        <section ref={ref}>
            <div className="container">
                <hr className="mb-50 mt-50"/>
                <div className="row"
                     data-aos={"fade-up"}
                     data-aos-delay={100}
                     data-aos-duration={1000}>
                    <div className="col-md-6 mb-20 col-sm-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Verhoilumateriaalit</h2>
                                <p>Laaja kangasvalikoima: Orient Occident, Henry Borg, Lauritzon’s ja Annala</p>
                                <p>Nahat</p>
                                <p>Keinonahat</p>
                                <p>Venekuomukangas</p>
                                <p>Vaahtomuovit</p>
                                <p>Ylijäämä kangas ja nahkapalat, vanut ja vaahtomuovipalat askarteluun</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 mb-20 col-sm-6">
                        <div className="row">
                            <div className="col-sm-12">
                                        <h2>Verhoilutarvikkeet</h2>
                                        <p>
                                            <ul>
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
                                            </ul>
                                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Loader>
));

export default Kauppa;
