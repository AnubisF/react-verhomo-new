import React from "react";
import Loader from "../../components/Loader/Loader";
import Map from "../../components/Maps/Map";

const GoogleMaps = () => (
  <Loader>
    <section className="pb-0 map-section">
      <Map classAppend="wide" />
    </section>
  </Loader>
);

export default GoogleMaps;
