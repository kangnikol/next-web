import Image from "next/image";

const Portofolio = () => {
  return (
    <section id="portofolio">
      <div className="container">
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
                    Laudantium voluptas sequi laborum vel enim? Quisquam
                    similique ipsam deleniti iure possimus!
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
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <div className="card-img-top">
                  <Image src="/bg.png" alt="test" width={300} height={200} />
                </div>
                <div class="card-body">
                  <p class="card-text">
                    3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex cupiditate nemo sed qui atque quibusdam laborum mollitia
                    molestiae ipsa architecto!
                  </p>
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
                      4. Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit. Officiis nam nihil quisquam quo culpa dicta illum
                      odio maiores saepe iusto.
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
                      5. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Ex et nihil odio iusto. Odio voluptate dolor sed
                      laborum eos perferendis.
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
                      6. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Qui labore impedit expedita quas reiciendis earum
                      vitae magnam, harum illum praesentium?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
