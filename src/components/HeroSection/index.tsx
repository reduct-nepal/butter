import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

import CTAButton from "../CtaButton";
import PunitImage from "assets/images/punit.png";

export default function Hero(): React.ReactElement {
  return (
    <div className="container">
      <div className={`${styles.heroContainer} sectionContainer`}>
        <h1>Converting high-intent customers through pain-point SEO</h1>
        <p>
          We help B2B SaaS companies find their high-intent BoFu keywords and
          create content that helps them rank on top of Google.{" "}
        </p>
        <CTAButton
          link="https://calendly.com/reduct-nepal/good-better-butter-your-content"
          className={styles.ctaButton}
        >
          <div className={styles.ctaContainer}>
            <Image
              className={styles.ctaImage}
              src={PunitImage}
              alt="Human CTA face"
            />
            Talk to a human
          </div>
        </CTAButton>
      </div>
    </div>
  );
}
