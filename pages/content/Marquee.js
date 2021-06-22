import Image from "next/image";

const Marquee = () => {
  return (
    <div className="marqueeRoot">
      <div className="container">
        <div className="row content">
          <div className="col">
            <h1>We wonder</h1>
          </div>
          <div className="col">
            <Image
              src="/wonder.png"
              href="https://www.joinwonder.com/"
              width={236}
              height={128}
            />
          </div>
          <div className="col">
            <p>
              We are part of the fast growing Wonder Networks. Senja is
              Indonesias partner and is providing staffing and offshoring
              solutions to startups, agencies, organisations and individuals
              around the world. Visit our Wonder today and get started building
              a highly talented and cost-efficient team of experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
