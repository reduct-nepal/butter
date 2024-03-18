import * as React from "react";
import styles from "./page.module.css";

import Hero from "components/herosection";
import Navbar from "components/navbar";
import Problem from "components/problemsection";
import ButterWay from "components/butterway";
import Benefits from "components/benefits";
import Pricing from "components/pricing";
import Faq from "components/faq";
import Footer from "components/footer";
import Copyright from "components/copyrightsection";

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
