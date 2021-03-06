const Marquee = () => {
  return (
    <div className="marqueeRoot">
      <div className="container">
        <div className="row content">
          <div className="col title">
            <h1>We wonder</h1>
          </div>
          <div className="col img">
            <a href="https://www.joinwonder.com" target="_blank">
              <img
                src="/wonder.png"
                width={236}
                height={60}
                alt="Wonder Jobs Logo"
              />
            </a>
          </div>
          <div className="col text">
            <p>
              We are part of the fast growing Wonder Networks. Senja is
              Indonesias partner and is providing staffing and offshoring
              solutions to startups, agencies, organisations and individuals
              around the world. Visit Wonder today and start building highly
              cost-efficient teams of experts and talents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
