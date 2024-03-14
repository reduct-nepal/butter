import React from "react";

import CTAButton from "components/cta-button";
import styles from "./hero.module.css";
import Link from "next/link";
import ButterLogo from "../../assets/icons/butter.svg";
import Image from "next/image";

export default function Hero(): React.ReactElement {
  return (
    <div className={`${styles.main} container`}>
      <h1 className={styles.heading}>
        Content growth can happen over a month. And, we can prove that!
      </h1>
      <p>You focus on your product, we got your marketing!</p>
      <div className={styles.butterLogo}>
        <Image
          width={32}
          src={ButterLogo}
          alt="Butter Logo"
        />
      </div>

      <div className={styles.button_container}>
        <CTAButton
          className={styles.cta_button}
          link="https://calendly.com/reduct-nepal/good-better-butter-your-content"
        >
          Reach us out today!
        </CTAButton>
        <CTAButton className={styles.pricing_button}>
          <Link
            href="/#pricing"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Get Pricing
          </Link>
        </CTAButton>
      </div>
    </div>
  );
}
