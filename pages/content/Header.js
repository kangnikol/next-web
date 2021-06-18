import Link from "next/link";

const Header = () => {
  return (
    <div>
      <section id="header">
        <div className="headerBox">
          <div className="row">
            <div className="col-7">
              <div className="col-lg-7">
                <h1>
                  WE BRING YOUR <span className="stroke">IDEAS</span> TO{" "}
                  <span className="stroke">LIFE</span>.
                </h1>
                <Link href="#">
                  <div className="btn hBtn">
                    <a>
                      <span className="btnText">Start now</span>
                    </a>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
