import React from "react";
import styles from "./pricing.module.css";

import Card from "./Card";
import {
  PRICING_GROWTH_COPY,
  ONE_OFF_BLOG_COPY,
  CUSTOM_PRICING_COPY,
} from "./constant";

export default function Pricing(): React.ReactElement {
  return (
    <section className="container">
      <div className={`${styles.pricingContainer} sectionContainer`}>
        <h1>
          Pricing<span className="butter-text">.</span>
        </h1>
        <div className={styles.pricingCardContainer}>
          <Card
            copy={PRICING_GROWTH_COPY}
            className={styles.cardFit}
          />
          <div className={styles.verticalCardContainer}>
            <Card
              copy={ONE_OFF_BLOG_COPY}
              ctaClassName={styles.transparentCta}
            />
            <Card
              copy={CUSTOM_PRICING_COPY}
              ctaClassName={styles.transparentCta}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
