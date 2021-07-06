import React, {forwardRef} from "react";
import FeatureBoxTwo from "../../elements/FeatureBox/FeatureBoxTwo";
import dataFeatures from "../../data/About/about-corporate-business.json";
import HeadingSection from "../HeadingSection/HeadingSection";

const Tarjous = forwardRef((props, ref) => (
    <section ref={ref} className="main-section pb-70">
        <div className="container">
            <div className="row">
                <HeadingSection title="Tarjouspyyntö" tagline="">
                </HeadingSection>
            </div>
            <div className="row">
                {dataFeatures.map((feature) => (
                    <FeatureBoxTwo key={feature.id} icon={feature.icon} title={feature.title}>
                        {feature.text}
                    </FeatureBoxTwo>
                ))}
            </div>
        </div>
    </section>
));

export default Tarjous;
