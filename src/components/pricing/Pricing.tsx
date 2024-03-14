import React from "react";
import styles from "./pricing.module.css";

import CTAButton from "components/cta-button";
import { packages } from "./constant";

interface CopyInterface {
  title: string;
  bestFor: string;
  pricing: string;
  ctaText: string;
  whatsIncluded: Array<string>;
  teamEquivalent: string;
  containerClassname: string;
  buttonClassName: string;
}

const Pricing = () => {
  const packageType = (copy: Record<string, CopyInterface>, type: string) => {
    const {
      title,
      bestFor,
      pricing,
      ctaText,
      whatsIncluded,
      teamEquivalent,
      containerClassname,
      buttonClassName,
    } = copy[type];

    return (
      <div className={styles[containerClassname] + " " + styles.package}>
        <div className={styles.packagesFirstContainer}>
          <h4 className={styles.packagesboldText}>{title}</h4>
          <p>
            <span className={styles.packagesboldText}>Best for: </span>
            {bestFor}
          </p>
          <div className={styles.pricing}>
            <h2 className={styles.pricingText}>{pricing}</h2>
            <p className={styles.pricingExtraSmallText}>
              per <br />
              monh
            </p>
          </div>
          <CTAButton
            className={styles.packageCta + " " + styles[buttonClassName]}
            link="https://calendly.com/yashant"
          >
            {ctaText}
          </CTAButton>
        </div>
        <div className={styles.packagesSecondContainer}>
          <div className={styles.packagesColumn}>
            <p className={styles.packagesboldText}>What&apos;s included?</p>
            {whatsIncluded.map((d: string, id: number) => (
              <p
                key={id}
                className={styles.packagesSmallText}
              >
                {d}
              </p>
            ))}
          </div>
          <div className={styles.packagesColumn}>
            <p className={styles.packagesboldText}>Team Equivalent</p>
            <p className={styles.packagesSmallText}>{teamEquivalent}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className={styles.packagesContainer + " " + "container"}
      id="pricing"
    >
      <h2 className={styles.packagesboldText}>Pricing</h2>
      <div className={styles.packagesContainerColumn}>
        <div className={styles.packagesType}>
          {packageType(packages, "starter")}
          {packageType(packages, "growth")}
        </div>
        <div className={styles.customPackage}>
          <h4 className={styles.packagesboldText}>Have a unique need?</h4>
          <p>
            Get on a call to discover how we can help you make your inbound
            marketing effort buttery smooth.
          </p>
          <CTAButton
            link={"https://calendly.com/yashant"}
            className={styles.customPackageCta}
          >
            Book a call
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
