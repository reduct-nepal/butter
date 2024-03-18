import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/HeroSection";
import Navbar from "root/components/NavBar";
import ButterWay from "components/ButterWay";
import Benefits from "root/components/Benefits";

import { SolutionSectionCopy } from "root/components/ButterWay/constant";
import { BenefitsCopy } from "root/components/Benefits/constants";
import Pricing from "root/components/Pricing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <ButterWay copy={SolutionSectionCopy} />
      <Benefits copy={BenefitsCopy} />
      <Pricing />
    </main>
  );
}
