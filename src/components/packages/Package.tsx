import React from "react";
import styles from "./packages.module.css";
import { packages } from "./constant";
import Link from "next/link";

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

const Package = () => {
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
          <Link
            className={styles.packageCta + " " + styles[buttonClassName]}
            href={"https://calendly.com/yashant"}
            target="_blank"
          >
            {ctaText}
          </Link>
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
          <Link
            href={"https://calendly.com/yashant"}
            target="_blank"
            className={styles.customPackageCta}
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Package;
