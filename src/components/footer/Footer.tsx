import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

import LocationIcon from "../../assets/icons/location.svg";
import MailIcon from "../../assets/icons/mail.svg";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContainer}>
        <h1>Get a free SEO audit of your website</h1>
        <p>You focus on building your products, and we’ll lead the growth. </p>
        <Link
          href="https://calendly.com/reduct-nepal/good-better-butter-your-content"
          target="_blank"
          className={styles.footerCta}
        >
          Book a call
        </Link>
      </div>
      <div className={styles.copyrightContainer}>
        <p>All rights reserved 2024 @Butter Content</p>

        <div className={styles.copyrightRightCOntainer}>
          <div className={styles.copyrightRow}>
            <Image
              src={LocationIcon}
              alt="location icon"
            />
            <p>Sanepa, Lalitpur, Nepal</p>
          </div>
          <div className={styles.copyrightRow}>
            <Image
              src={MailIcon}
              alt="Mail icon"
            />
            <p>hello@buttercontent.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
