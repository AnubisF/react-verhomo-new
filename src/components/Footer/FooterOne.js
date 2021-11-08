import React from "react";
import logoFooter from "../../assets/images/work_logo_w.png";

const FooterOne = () => (

  <>
    <footer className="footer" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-5">
              <div className="widget widget-text">
                <div className="logo-footer">
                  <a href={`${process.env.PUBLIC_URL}/etusivu`}>
                    <img
                      className="logo-footer"
                      src={logoFooter}
                      alt=""
                    />
                  </a>
                </div>
                <p>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Linkit</h5>
                <ul>
                  <li>
                    <a href={`${process.env.PUBLIC_URL}/Etusivu`}>Etusivu</a>
                  </li>
                  <li>
                    <a href={`${process.env.PUBLIC_URL}/Katarina`}>Katariina</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Palvelut</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Tarjouspyyntö</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Avoinna</h5>
                <p>
                  <span className="white-color">Ma - Pe: 9:00 - 17:00</span> <br />
                  <span className="white-color">Lauantaisin olemme auki sopimuksen mukaan, sopimalla viimeistään edeltävänä päivänä <br />puh: 045 851 77 10</span>
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="widget widget-text widget-links">
                <h5 className="widget-title">Ota meihin yhteyttä</h5>
                <ul>
                  <li>
                    <i className="icofont icofont-google-map"></i>
                    <a href="https://g.page/Verhoomo-Oulu?share">
                      Ketokatu 8 90140 Oulu.
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-iphone"></i>
                    <a href="tel:441632960290">+045 851 77 10</a>
                  </li>
                  <li>
                    <i className="icofont icofont-mail"></i>
                    <a href="mailto:info@vokatariina.fi">
                      info@vokatariina.fi
                    </a>
                  </li>
                  <li>
                    <i className="icofont icofont-globe"></i>
                    <a href="www.vokatariina.fi">www.vokatariina.fi</a>
                  </li>
                  <li>
                    <i className="icofont icofont-facebook"></i>
                    <a href="https://www.facebook.com/vokatariina">Facebook</a>
                  </li>
                  <li>
                    <i className="icofont icofont-instagram"></i>
                    <a href="https://www.facebook.com/vokatariina">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container">
              <div className="copy-right text-center">
                Copyright &copy; {new Date().getFullYear()} <a
                  href="https://www.vokatariina.fi"> www.vokatariina.fi </a>
              </div>
              <div className="">
                <div className="powered text-center">
                  Powered by: <a href="https://www.masterbear.dev/"> www.masterbear.dev </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer-height" style={{ height: "430px" }}></div>
  </>
);

export default FooterOne;