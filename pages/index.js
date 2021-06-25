import Header from "./content/Header.min";
import Hiring from "./content/Hiring.min";
import Marquee from "./content/Marquee.min";
import First from "./content/First.min";
import Second from "./content/Second.min";
import Third from "./content/Third.min";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <html lang="en">
        <Head>
          <title>Senja Solutions - Senja Solutions</title>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Senja offers fast and affordable IT Services and bespoke Web- and App-Development. Our highly agile team will turn your vision into reality in budget and time."
          />
          <link rel="canonical" href="https://www.senja.co.uk/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Senja Solutions - Senja Solutions"
          />
          <meta property="og:url" content="https://www.senja.co.uk/" />
          <meta property="og:site_name" content="Senja Solutions" />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Senja Solutions - Senja Solutions"
          />
          <script
            async=""
            src="//www.google-analytics.com/analytics.js"
          ></script>

          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="dns-prefetch" href="//s.w.org" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Senja Solutions » Feed"
            href="https://www.senja.co.uk/feed/"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Senja Solutions » Comments Feed"
            href="https://www.senja.co.uk/comments/feed/"
          />
          <link
            rel="alternate"
            type="text/calendar"
            title="Senja Solutions » iCal Feed"
            href="https://www.senja.co.uk/events/?ical=1"
          />
        </Head>
        <Header />
        <Hiring />
        <First />
        <Second />
        <Third />
        <Marquee />
      </html>
    </div>
  );
}
