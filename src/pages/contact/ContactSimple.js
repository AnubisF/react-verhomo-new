import React, { forwardRef } from "react";
import Loader from "../../components/Loader/Loader";
import ContactThree from "../../components/ContactUs/ContactThree";
import ClientsBrand from "../../components/ClientsBrand/ClientsBrand";
import MapBox from "../../components/Maps/MapBox";

const ContactSimple = forwardRef((props, ref) => (
    <Loader>
      <ContactThree ref={ref}/>
      <section className="pt-0 pb-0 map-section">
        <MapBox classAppend="wide" />
      </section>
      {/*<ClientsBrand />*/}
    </Loader>
));

export default ContactSimple;
