import * as React from "react";
import styles from "./page.module.css";

import HeroSection from "components/HeroSection";
import Navbar from "components/NavBar";
import Problem from "components/ProblemSection";
import ButterWay from "components/ButterWay";
import Benefits from "components/Benefits";
import Faq from "components/Faq";
import Pricing from "root/components/newPricing";
import Footer from "root/components/NewFooter";
import Copyright from "components/CopyrightSection";

import { SolutionSectionCopy } from "../components/ButterWay/constant";
import { BenefitsCopy } from "../components/Benefits/constants";
import { FaqSectionCopy } from "../components/Faq/constant";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <HeroSection />
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
