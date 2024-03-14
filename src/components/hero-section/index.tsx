import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";

import CTAButton from "components/cta-button";
import ButterLogo from "../../assets/icons/butter.svg";

export default function Hero(): React.ReactElement {
  return (
    <div className={`${styles.main} container`}>
      <h1 className={styles.heading}>
        Content growth can happen over a month. And, we can prove that!
      </h1>
      <div className={styles.descContainer}>
        <p>You focus on your product, we got your marketing!</p>

        <div className={styles.butterLogo}>
          <Image
            width={32}
            src={ButterLogo}
            alt="Butter Logo"
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <CTAButton
          className={styles.ctaButton}
          link="https://calendly.com/reduct-nepal/good-better-butter-your-content"
        >
          Reach us out today!
        </CTAButton>
        <CTAButton
          className={styles.pricingButton}
          link="#pricing"
        >
          Get Pricing
        </CTAButton>
      </div>
    </div>
  );
}
