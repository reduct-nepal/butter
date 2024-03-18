import React from "react";
import styles from "./butterWay.module.css";

interface CopyInterface {
  title: string;
  desc: string;
}
interface ButterWayInterface {
  copy: Array<CopyInterface>;
}

export default function ButterWay({
  copy,
}: ButterWayInterface): React.ReactElement {
  return (
    <section className="container">
      <div className={`${styles.butterWayContainer} section-container`}>
        <h1 className={styles.butterWayHeading}>
          the <span className="butter-text">butter</span> way
        </h1>
        <div className={styles.butterWayRightContainer}>
          {copy.map((list) => (
            <div
              key={list.title}
              className={styles.butterWayList}
            >
              <h3>{list.title}</h3>
              <p>{list.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
