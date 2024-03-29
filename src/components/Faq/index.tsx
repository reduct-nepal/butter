"use client";

import React, { useState } from "react";
import Image from "next/image";

import styles from "./faq.module.css";
import ActiveAccordion from "assets/icons/activeAccordion.svg";
import InActiveAccordion from "assets/icons/inActiveAccordion.svg";
import FaqSvg from "assets/images/Faqsvg.svg";

interface CopyInterface {
  question: string;
  answer: string;
}
interface FaqInterface {
  copy: Array<CopyInterface>;
}

export default function Faq({ copy }: FaqInterface): React.ReactElement {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(
    null,
  );

  const expandAccordion = (accordion: string) => {
    if (expandedAccordion === accordion) {
      setExpandedAccordion(null);
      return;
    }

    setExpandedAccordion(accordion);
  };

  return (
    <section className={`${styles.faqBg} container`}>
      <div className={`${styles.faqContainer} sectionContainer`}>
        <h1 className={styles.faqHeading}>
          Frequently asked questions
          <Image
            className={styles.faqSvg}
            src={FaqSvg}
            alt="FAQ svg"
          />
        </h1>
        <div className={styles.faqRightContainer}>
          {copy.map((list) => (
            <div
              key={list.question}
              className={styles.faqList}
              onClick={() => expandAccordion(list.question)}
            >
              <p className={styles.faqQuestion}>{list.question}</p>
              {expandedAccordion === list.question && (
                <p className={styles.faqAnswer}>{list.answer}</p>
              )}
              <Image
                className={styles.accordionPosition}
                src={
                  expandedAccordion === list.question
                    ? ActiveAccordion
                    : InActiveAccordion
                }
                alt="Butter FAQ accordion icon"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
