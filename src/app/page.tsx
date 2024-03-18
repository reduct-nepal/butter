import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/HeroSection";
import Navbar from "root/components/NavBar";
import ButterWay from "components/ButterWay";
import { SolutionSectionCopy } from "root/components/ButterWay/constant";
import Footer from "components/footer";
import Copyright from "components/CopyrightSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <ButterWay copy={SolutionSectionCopy} />
      <Footer />
      <Copyright />
    </main>
  );
}
