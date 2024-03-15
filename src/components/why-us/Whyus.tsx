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
        const isOdd = index % 2 !== 0;

        return (
          <div
            className={`${styles.benefit} ${!isOdd && styles.benefitReversed}`}
            key={index}
          >
            <div className={styles.benefitContent}>
              <h3>{benefit.title}</h3>
              <div className={styles.benefitDescription}>
                <p>{benefit.list[0]}</p>
                <p>{benefit.list[1]}</p>
              </div>
            </div>

            <Image
              width={264}
              src={benefit.media}
              alt="BenefitPhoto"
            />
          </div>
        );
      })}
    </div>
  );
}
