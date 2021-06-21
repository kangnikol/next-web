import "../styles/Home.module.css";
import Header from "./content/Header";
import Hiring from "./content/Hiring";
import Marquee from "./content/Marquee";
import First from "./content/First";
import Second from "./content/Second";
import Third from "./content/Third";
import Script from "next/experimental-script";

export default function Home() {
  return (
    <div>
      <Script async src="../js/cursor.js" />
      <Header />
      <Hiring />
      <First />
      <Second />
      <Third />
      <Marquee />
    </div>
  );
}
