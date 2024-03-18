import * as React from "react";
import styles from "./page.module.css";

import Hero from "components/herosection/Hero";
import Navbar from "components/navbar/Navbar";
import Problem from "components/problemsection/Problem";
import Benefits from "components/benefits/Benefits";
import Pricing from "components/pricing/Pricing";
import Faq from "components/faq/Faq";
import Footer from "components/footer/Footer";
import Copyright from "components/copyrightsection/CopyrightSection";
import ButterWay from "components/butterway/ButterWay";

import { SolutionSectionCopy } from "components/butterway/constant";
import { BenefitsCopy } from "components/benefits/constants";
import { FaqSectionCopy } from "components/faq/constant";

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
