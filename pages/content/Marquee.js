const Marquee = () => {
  return (
    <div className="marqueeRoot">
      <div className="row">
        <div className="col">
          <div className="border">
            <marquee behavior="scroll" direction="left">
              <div className="parent">
                <div className="child">
                  <h1>
                    WE DELIVER <span className="stroke">IDEAS</span> TO{" "}
                    <span className="stroke">LIFE</span> /
                  </h1>
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
