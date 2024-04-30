import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./benefits.module.css";

interface BenefitsCopyInterface {
  title: string;
  media: StaticImageData;
  pargraph: Array<string>;
}

export default function Benefits({
  copy,
}: {
  copy: Array<BenefitsCopyInterface>;
}): React.ReactElement {
  return (
    <section className={`${styles.benefitsBg} container`}>
      <div className={`${styles.benefitsContainer} sectionContainer`}>
        <h1 className={styles.heading}>
          We help you convert high-intent customers through {" "}
          <span className="butter-text">pain-point SEO.</span>
        </h1>
        <div className={styles.copyContainer}>
          {copy.map((list: BenefitsCopyInterface, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`${styles.copyParent} ${
                  isOdd && styles.copyParentReversed
                }`}
              >
                <Image
                  className={styles.benefitImage}
                  src={list.media}
                  alt="Butter Benefits"
                  unoptimized
                />
                <div className={styles.listContainer}>
                  <h3>{list.title}</h3>
                  {list.pargraph.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
