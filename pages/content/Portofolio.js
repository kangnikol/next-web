import Image from "next/image";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <div class="custom-shape-divider-top-1623743509">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="portofolioBox">
        <div className="row">
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <div className="card-img-top">
                <Image src="/bg.png" alt="test" width={300} height={200} />
              </div>
              <div class="card-body">
                <p class="card-text">
                  1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium voluptas sequi laborum vel enim? Quisquam similique
                  ipsam deleniti iure possimus!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <div className="card-img-top">
                <Image src="/bg.png" alt="test" width={300} height={200} />
              </div>
              <div class="card-body">
                <p class="card-text">
                  2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, quis? Ab numquam vero accusantium nam? Sequi
                  blanditiis libero quam veritatis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <div className="card-img-top">
                <Image src="/bg.png" alt="test" width={300} height={200} />
              </div>
              <div class="card-body">
                <p class="card-text">
                  3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  cupiditate nemo sed qui atque quibusdam laborum mollitia
                  molestiae ipsa architecto!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card" style={{ width: "18rem" }}>
              <div className="card-img-top">
                <Image src="/bg.png" alt="test" width={300} height={200} />
              </div>
              <div class="card-body">
                <p class="card-text">
                  4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  cupiditate nemo sed qui atque quibusdam laborum mollitia
                  molestiae ipsa architecto!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
