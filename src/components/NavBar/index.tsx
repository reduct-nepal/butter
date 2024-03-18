import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";
import CTAButton from "root/components/CtaButton";
import Logo from "assets/images/global/logo-white.svg";

export default function Navbar(): React.ReactElement {
  return (
    <section className={styles.container}>
      <div className={styles.navContainer}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Site Logo"
          />
        </Link>
        {/* <div className={styles.links_container}>
        <span>Pricing</span>
        <span className={styles.separator}>.</span>
        <span>Why Butter?</span>
        <span className={styles.separator}>.</span>
        <span>Examples</span>
      </div> */}

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