import React from "react";

const FooterCopyright = () => (
    <div className="footer-copyright">
        <div className="container">
            <div className="row">
                <div className="">
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
);

export default FooterCopyright;
