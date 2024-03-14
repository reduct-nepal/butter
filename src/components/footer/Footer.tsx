import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

import CTAButton from "components/cta-button";

import LocationIcon from "../../assets/icons/location.svg";
import MailIcon from "../../assets/icons/mail.svg";
import Underline from "../../assets/images/underline.svg";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <div className={styles.header}>
          <h1>Get a free SEO audit of your website</h1>
          <div className={styles.underlinePosition}>
            <Image
              src={Underline}
              alt="Underline"
            />
          </div>
        </div>
        <p>You focus on building your products, and we’ll lead the growth. </p>
        <CTAButton
          link="https://calendly.com/reduct-nepal/good-better-butter-your-content"
          className={styles.footerCta}
        >
          Book a call
        </CTAButton>
      </div>
      <div className={styles.copyrightContainer}>
        <span className={styles.copyrightReserved}>
          All rights reserved 2024 @Butter Content
        </span>

        <div className={styles.copyrightRightContainer}>
          <div className={styles.copyrightRow}>
            <Image
              width={18}
              src={LocationIcon}
              alt="location icon"
            />
            <span>Sanepa, Lalitpur, Nepal</span>
          </div>
          <div className={styles.copyrightRow}>
            <Image
              width={18}
              src={MailIcon}
              alt="Mail icon"
            />
            <span>hello@buttercontent.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
