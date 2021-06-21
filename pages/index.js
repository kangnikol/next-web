import "../styles/Home.module.css";
import Header from "./content/Header";
import Hiring from "./content/Hiring";
import About from "./content/About";
import Team from "./content/Team";
import Marquee from "./content/Marquee";
import Script from "next/experimental-script";

export default function Home() {
  return (
    <div>
      <Script async src="../js/cursor.js" />
      <Header />
      <Hiring />
      <About />
      <Marquee />
    </div>
  );
}
