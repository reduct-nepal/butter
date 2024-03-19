import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";

import Logo from "assets/images/global/logo-white.svg";
import CTAButton from "../CtaButton";

export default function Navbar(): React.ReactElement {
  return (
    <section className={`${styles.navPosition} container`}>
      <div className={styles.navContainer}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Site Logo"
          />
        </Link>
        <CTAButton
          link="https://calendly.com/reduct-nepal/good-better-butter-your-content"
          className={styles.navCta}
        >
          Talk to us!
        </CTAButton>
      </div>
    </section>
  );
}
