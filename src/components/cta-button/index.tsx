import React from "react";
import styles from "./ctaButton.module.css";
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
        href={link}
        target={link.startsWith("/#") ? "" : "_blank"}
        rel="noopener noreferrer"
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
