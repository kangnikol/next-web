import Header from "./content/Header";
import Hiring from "./content/Hiring";
import Marquee from "./content/Marquee";
import First from "./content/First";
import Second from "./content/Second";
import Third from "./content/Third";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Senja Solutions - Senja Solutions</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
        <meta
          name="description"
          content="Senja offers fast and affordable IT Services and bespoke Web- and App-Development. Our highly agile team will turn your vision into reality in budget and time."
        ></meta>
        <link rel="canonical" href="https://www.senja.co.uk/"></link>
      </Head>
      <Header />
      <Hiring />
      <First />
      <Second />
      <Third />
      <Marquee />
    </div>
  );
}

