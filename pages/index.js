import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./content/Header";
import Hiring from "./content/Hiring";
import About from "./content/About";
import Carouesell from "./content/Carousell";
import Team from "./content/Team";
import Marquee from "./content/Marquee";
import Script from "next/experimental-script";

export default function Home() {
  return (
    <div>
      <Script async src="../js/cursor.js" />
      {/* Header */}
      <Header />
      <Hiring />
      <About />
      {/* <Carouesell /> */}
      <Team />
      <Marquee />
    </div>
  );
}
