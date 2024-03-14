import React from "react";
import styles from "./cta_button.module.css";
import Link from "next/link";

export default function Index({
  children,
  className = "",
  link,
}: {
  children: React.ReactElement | string;
  className?: string;
  link?: string;
}): React.ReactElement {
  if (link) {
    return (
      <Link
        href="https://calendly.com/reduct-nepal/good-better-butter-your-content"
        target="_blank"
        className={`${styles.container} ${className} link`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles.container} ${className}`}>{children}</button>
  );
}
