import * as React from "react";
import styles from "./page.module.css";

import Hero from "../components/HeroSection";
import Navbar from "root/components/NavBar";
import ButterWay from "components/ButterWay";
import { SolutionSectionCopy } from "root/components/ButterWay/constant";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <ButterWay copy={SolutionSectionCopy} />
    </main>
  );
}
