import React from "react";
import styles from "./card.module.css";
import Image, { StaticImageData } from "next/image";
import CTAButton from "../Ctabutton/CTAButton";

interface PricingCopyInterface {
  title: string;
  titleIcon?: StaticImageData;
  description?: string;
  pricing?: string;
  pricingCriteria?: React.ReactElement;
  ctaText: string;
  whatsIncludedList?: Array<string>;
  teamEquivalent?: string;
}

export default function Card({
  copy,
  className,
  ctaClassName,
}: {
  copy: PricingCopyInterface;
  className?: string;
  ctaClassName?: string;
}): React.ReactElement {
  const {
    title,
    titleIcon,
    description,
    pricing,
    pricingCriteria,
    ctaText,
    whatsIncludedList,
    teamEquivalent,
  } = copy;

  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.topContainer}>
        <h4 className={styles.header}>
          {title}
          {titleIcon && (
            <span>
              <Image
                src={titleIcon}
                alt="Butter Growth Pricing Title Icon"
              />
            </span>
          )}
        </h4>
        {description && <p>{description}</p>}
        <div className={styles.cardPricing}>
          <h1>{pricing}</h1>
          {pricingCriteria && pricingCriteria}
        </div>
        <CTAButton
          link="https://calendly.com/reduct-nepal/good-better-butter-your-content"
          className={ctaClassName}
        >
          {ctaText}
        </CTAButton>
      </div>
      {whatsIncludedList?.length && (
        <div className={styles.secondaryContainer}>
          <p className={styles.secondaryHeader}>What’s included?</p>
          <div className={styles.whatsIncludedList}>
            {whatsIncludedList.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </div>
        </div>
      )}
      {teamEquivalent && (
        <div className={styles.secondaryContainer}>
          <p className={styles.secondaryHeader}>Team Equivalent</p>
          <p>{teamEquivalent}</p>
        </div>
      )}
    </div>
  );
}
