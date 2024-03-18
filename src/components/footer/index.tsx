import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

import CTAButton from "components/CtaButton";

import Underline from "assets/images/underline.svg";

export default function Footer(): React.ReactElement {
  return (
    <div className="container">
      <div className={`${styles.footerContainer} section-container`}>
        <div className={styles.header}>
          <h1>Get a free SEO audit of your website</h1>
          <div className={styles.underlinePosition}>
            <Image
              src={Underline}
              alt="Underline"
            />
          </div>
        </div>
        <p>
          You focus on building your products, and we&apos;ll lead the growth.{" "}
        </p>
        <CTAButton
          link="https://calendly.com/reduct-nepal/good-better-butter-your-content"
          className={styles.footerCta}
        >
          Book a free call
        </CTAButton>
      </div>
    </div>
  );
}
