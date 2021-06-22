import Image from "next/image"; 

const Header = () => {
  return (
    <div>
      <section id="header">
        <div className="headerBox">
          <Image src="/f12m.png" layout="fill" />
          <div className="row">
            <div className="col-10">
              <div className="col-md-7">
                {/* <div className="col-lg-7"> */}
                <h1>
                  WE BRING YOUR <span className="stroke">IDEAS</span> TO{" "}
                  <span className="stroke">LIFE</span>.
                </h1>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
