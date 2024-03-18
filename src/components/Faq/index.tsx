import React from "react";
import styles from "./faq.module.css";

interface CopyInterface {
  question: string;
  answer: string;
}
interface FaqInterface {
  copy: Array<CopyInterface>;
}

export default function Faq({
  copy,
}: FaqInterface): React.ReactElement {
  return (
    <section className="container">
      <div className={`${styles.faqContainer} section-container`}>
        <h1 className={styles.faqHeading}>
          Frequently asked questions
        </h1>
        <div className={styles.faqRightContainer}>
          {copy.map((list) => (
            <div
              key={list.question}
              className={styles.faqList}
            >
              <p className={styles.faqQuestion}>{list.question}</p>
              <p className={styles.faqAnswer}>{list.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
