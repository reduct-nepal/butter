import Image from "next/image";
import styles from "./copyright.module.css";

import LocationIcon from "assets/icons/location.svg";
import MailIcon from "assets/icons/mail.svg";

export default function Copyright(): React.ReactElement {
  return (
    <div className={`${styles.footerPosition} container`}>
      <div className={styles.copyrightContainer}>
        <span className={styles.copyrightReserved}>
          All rights reserved 2024 @Butter Content
        </span>

        <div className={styles.copyrightRightContainer}>
          <div className={styles.copyrightRow}>
            <Image
              width={18}
              src={LocationIcon}
              alt="location icon"
            />
            <span>Sanepa, Lalitpur, Nepal</span>
          </div>
          <div className={styles.copyrightRow}>
            <Image
              width={18}
              src={MailIcon}
              alt="Mail icon"
            />
            <span>contact@buttercontent.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
