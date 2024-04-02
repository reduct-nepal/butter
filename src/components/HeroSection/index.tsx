import React from "react";
import Image from "next/image";
import styles from "./hero.module.css";

import CTAButton from "../CtaButton";
import PunitImage from "assets/images/punit.png";
import HeroImage from "assets/images/butterHero.gif";

import WaveSvg from "../../assets/images/heroWave.svg";

export default function HeroSection(): React.ReactElement {
  return (
    <div className="container">
      <div className={`${styles.heroContainer} sectionContainer`}>
        <div className={styles.heroContentContainer}>
          <h2 className={styles.zIndex1}>
          Delivering content that drives your growth quickly
          </h2>
          <p className={styles.zIndex1}>
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

          <Image
            className={styles.waveSvg}
            src={WaveSvg}
            alt="wave svg"
          />
        </div>
        <Image
        className={styles.heroImage}
          src={HeroImage}
          alt="conversion animation"
          unoptimized
        />
      </div>
    </div>
  );
}
