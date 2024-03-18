import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/HeroSection";
import Navbar from "root/components/NavBar";
import Problem from "root/components/ProblemSection";
import ButterWay from "components/ButterWay";
import Benefits from "root/components/Benefits";
import Pricing from "root/components/Pricing";

import { SolutionSectionCopy } from "root/components/ButterWay/constant";
import { BenefitsCopy } from "root/components/Benefits/constants";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Problem />
      <ButterWay copy={SolutionSectionCopy} />
      <Benefits copy={BenefitsCopy} />
      <Pricing />
    </main>
  );
}
