import React from "react";
import styles from "./cta_button.module.css";

export default function Index({
  children,
  className = ""
}: {
  children: React.ReactElement | string;
  className?: string
}): React.ReactElement {
  return <button className={`${styles.container} ${className}`}>{children}</button>;
}
