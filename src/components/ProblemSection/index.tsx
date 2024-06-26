import React from "react";
import styles from "./problem.module.css";
import Image from "next/image";

import { Problems } from "./constants";

export default function Problem(): React.ReactElement {
  return (
    <div className={`${styles.containerColor} container`}>
      <div className={`${styles.problemContainer} sectionContainer`}>
        <h1>
          SEO is <span className={styles.strikeText} >dead</span> evolving
        </h1>
        {Problems.map((problem, index) => {
          return (
            <div
              className={styles.problemCardContainer}
              key={index}
            >
              <div className={styles.problemTitle}>
                <Image
                  className={styles.problemIcon}
                  src={problem.media}
                  alt="Quantity Icon"
                />
                <h4>{problem.title}</h4>
              </div>
              <div className={styles.problemDescription}>
                <p>{problem.list}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
