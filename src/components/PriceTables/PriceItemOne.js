import React from "react";
import Icofont from "react-icofont";

const PriceItemOne = ({
  icon,
  title,
  currency,
  price,
  features,
  textButton,
  btnType,
  tableType,
  featured,
  index,
}) => (
  <div
    data-aos={"fade-up"}
    data-aos-delay={`${index}00`}
    data-aos-duration={1000}
    className={"col-md-6 col-lg-5 pricing-table" +
      (featured === "true" ? "-featured" : "") +
      " col-sm-6"
    }
  >
    <div
      className={
        "pricing-box" + (tableType === "rounded" ? "border-radius-20" : "")
      }
    >
      <Icofont icon={icon} />
      <h4>{title}</h4>
      <h2>
        <sup>{currency}</sup>
        <span>{price}</span>
      </h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>{feature.title}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default PriceItemOne;
