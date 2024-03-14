import React from "react";
import styles from "./whyUs.module.css";
import Image from "next/image";

import { Benefit } from "./constants";

export default function WhyUs(): React.ReactElement {
  return (
    <div
      className={`${styles.whyUsContainer} container`}
      id="whyUs"
    >
      {Benefit.map((benefit, index) => {
        const isEven = index % 2 != 0;
        return (
          <div
            className={`${styles.benefit} ${
              isEven ? styles.benefitReversed : ""
            }`}
            key={index}
          >
            <div className={styles.benefitContent}>
              <h3>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.list[0]}</p>
              <p>{benefit.list[1]}</p>
            </div>
            <div>
              <Image
                className={styles.whyUsImage}
                src={benefit.media}
                alt="BenefitPhoto"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
