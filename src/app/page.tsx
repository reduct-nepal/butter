import * as React from "react";
import styles from "./page.module.css";

import Hero from "components/Herosection";
import Navbar from "components/Navbar";
import Problem from "components/Problemsection";
import ButterWay from "components/Butterway";
import Benefits from "components/Benefits";
import Pricing from "components/Pricing";
import Faq from "components/Faq";
import Footer from "components/Footer";
import Copyright from "components/Copyrightsection";

import { SolutionSectionCopy } from "components/Butterway/constant";
import { BenefitsCopy } from "components/Benefits/constants";
import { FaqSectionCopy } from "components/Faq/constant";

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
