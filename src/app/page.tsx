import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/HeroSection";
import Navbar from "root/components/NavBar";
import ButterWay from "components/ButterWay";
import Benefits from "root/components/Benefits";
import Pricing from "root/components/Pricing";
import Faq from "root/components/Faq";

import { SolutionSectionCopy } from "root/components/ButterWay/constant";
import { BenefitsCopy } from "root/components/Benefits/constants";
import { FaqSectionCopy } from "root/components/Faq/constant";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <ButterWay copy={SolutionSectionCopy} />
      <Benefits copy={BenefitsCopy} />
      <Pricing />
      <Faq copy={FaqSectionCopy} />
    </main>
  );
}
