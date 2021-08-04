import React, { forwardRef } from "react";
import ContactFormFive from "./ContactFormFive";
import WhatsAppWidget from "react-whatsapp-widget";
import 'react-whatsapp-widget/dist/index.css'

const ContactThree = forwardRef((props, ref) => (
  <section className="contact-us dark-bg" ref={ref}>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <ContactFormFive />
        </div>
        <div className="col-md-4">
          <h3 className="white-color">Yhteystiedot</h3>
          <address className="white-color">Ketokatu 8 90140 Oulu.<br />
            Verhoomo & ompelimo Katariina<br />
            <abbr title="Phone">Puh:</abbr> 045 851 77 10
            <br />
            <a className="white-color" href="mailto:info@vokatariina.fi" >info@vokatariina.fi</a>
          </address>
          <h3 className="white-color">Avoinna</h3>
          <p>
            <span className="white-color">Ma - Pe: 9:00 - 17:00</span> <br />
            <span className="white-color">Lauantaisin olemme auki sopimuksen mukaan, sopimalla viimeistään edeltävänä päivänä numerosta: 045 851 77 10</span>
          </p>
        </div>
        <div className="col-md-4">
          <WhatsAppWidget phoneNumber='+358443371413'
                          message='Hello! 👋🏼 \n\nWhat can we do for you?'
                          companyName='Verhoomo Ompelimo'
                          sendButton='Send'/>
        </div>
      </div>
    </div>
  </section>
));

export default ContactThree;
