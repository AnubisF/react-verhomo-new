import React, {forwardRef} from "react";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import dataFeatures from "../../data/About/about-corporate-business.json";

const WhoWeAreEight = forwardRef(( props, ref ) => (
  <section ref={ref} className="main-section pb-70">
    <div className="container">
      <div className="row">
          <h3 className="container">TARJOUSPYYNTÖ</h3>
        {dataFeatures.map((feature) => (
          <FeatureBoxTwo key={feature.id} icon={feature.icon} title={feature.title}>
            {feature.text}
          </FeatureBoxTwo>
        ))}
      </div>
    </div>
  </section>
));

export default WhoWeAreEight;
