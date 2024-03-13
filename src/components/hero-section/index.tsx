import React from "react";

import CTAButton from "components/cta-button";
import styles from "./hero.module.css";
import Link from "next/link";

export default function Hero(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>We’re a SaaS Marketing Agency specializing on</p>
        <h1 className={styles.heading}>
          Pain Point SEO: Our Driver <br />
          for Your Company’s Evolution.
        </h1>
        <p>Butter: Your solution recipe for SEO success!</p>
        <div className={styles.button_container}>
          <CTAButton className={styles.cta_button}>
            <Link
              href="https://calendly.com/reduct-nepal/good-better-butter-your-content"
              target="_blank"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Reach us out today!
            </Link>
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
    </div>
  );
}
