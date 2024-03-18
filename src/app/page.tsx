import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/Herosection/Hero";
import Navbar from "../components/Navbar/Navbar";
import Problem from "../components/Problemsection/Problem";
import Benefits from "../components/Benefits/Benefits";
import Pricing from "../components/Pricing/Pricing";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyrightsection/Copyright";
import ButterWay from "../components/Butterway/ButterWay";

import { SolutionSectionCopy } from "../components/Butterway/constant";
import { BenefitsCopy } from "../components/Benefits/constants";
import { FaqSectionCopy } from "../components/Faq/constant";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Problem />
      <ButterWay copy={SolutionSectionCopy} />
      <Benefits copy={BenefitsCopy} />
      <Pricing />
      <Faq copy={FaqSectionCopy} />
      <Footer />
      <Copyright />
    </main>
  );
}
