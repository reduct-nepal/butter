import * as React from "react";
import styles from "./page.module.css";

import Hero from "components/HeroSection";
import Navbar from "components/NavBar";
import Problem from "components/ProblemSection";
import ButterWay from "components/ButterWay";
import Benefits from "components/Benefits";
import Pricing from "components/pricing";
import Faq from "components/Faq";
import Footer from "components/footer";
import Copyright from "components/CopyrightSection";

import { SolutionSectionCopy } from "../components/ButterWay/constant";
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
