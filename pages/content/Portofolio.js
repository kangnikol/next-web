import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Portofolio = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section id="portofolio">
      <div class="portofolioBox">
        <div class="row r-text">
          <div data-aos="fade-left">
            <div class="title">
              <span>Portofolio</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-img-top">
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
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-img-top">
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

        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-img-top">
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
          <div class="col">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-img-top">
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
