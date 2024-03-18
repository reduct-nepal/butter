import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/HeroSection/Hero";
import Navbar from "../components/NavBar/Navbar";
import Problem from "../components/ProblemSection/Problem";
import Benefits from "../components/Benefits/Benefits";
import Pricing from "../components/Pricing/Pricing";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/CopyrightSection/Copyright";
import ButterWay from "../components/ButterWay/ButterWay";

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
