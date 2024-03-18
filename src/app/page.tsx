import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/herosection";
import Navbar from "root/components/navbar";
import Problem from "root/components/problemsection";
import ButterWay from "root/components/butterway";
import Benefits from "root/components/benefits";
import Pricing from "root/components/pricing";
import Faq from "components/faq";
import Footer from "root/components/footer";
import Copyright from "root/components/copyrightsection";

import { SolutionSectionCopy } from "root/components/butterway/constant";
import { BenefitsCopy } from "root/components/benefits/constants";
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
