import React, {forwardRef} from "react";
import dataFeatures from "../../data/Palvelut/palvelut.json";
import HeadingSection from "../../components/HeadingSection/HeadingSection";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";

const Palvelut = forwardRef((props, ref) => (
  <section ref={ref}>
    <div className="container">
      <div className="row">
        <HeadingSection title="Palvelut" tagline="">
        </HeadingSection>
      </div>
      <div className="row mt-50">
        {dataFeatures.map((feature, i) => (
          <FeatureBoxTwo
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            index={i}
          >
            {feature.text}
          </FeatureBoxTwo>
        ))}
      </div>
    </div>
  </section>
));

export default Palvelut;
