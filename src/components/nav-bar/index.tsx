import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.css";
import CTAButton from "components/cta-button";
import Logo from "assets/images/global/logo-white.svg";

export default function Navbar(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Image
        src={Logo}
        alt="Site Logo"
      />
      <div className={styles.links_container}>
        <span>Pricing</span>
        <span className={styles.separator}>.</span>
        <span>Why Butter?</span>
        <span className={styles.separator}>.</span>
        <span>Examples</span>
      </div>
      <Link
        href="https://calendly.com/reduct-nepal/good-better-butter-your-content"
        rel="noopener noreferrer"
        target="_blank"
      >
        <CTAButton>Talk to Us!</CTAButton>
      </Link>
    </div>
  );
}
