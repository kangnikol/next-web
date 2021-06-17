import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="aboutBox">
      <div className="container">
        <div className="row cRows">
          <div className="col">
            <h1>Who Are We</h1>
          </div>
          <div className="col" data-aos="fade-down">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, expedita quod consectetur sint quia iste laborum rem,
              dolor doloremque fugit optio libero velit odit sunt sequi magnam,
              voluptatem eos soluta quam consequatur autem eveniet vero beatae.
              Officia, explicabo molestias laudantium cum natus illum nam
              asperiores exercitationem in similique officiis voluptate dolorem
              qui assumenda dolores dolorum aut fugit vel voluptatem eveniet
              mollitia eum earum pariatur deserunt? Soluta sequi possimus
              perspiciatis hic.
            </p>
            <div className="row" data-aos="fade-left">
              <div className="col cCols">
                <p>Strategy</p>
                <ul class="list-group">
                  <li className="">An item</li>
                  <li className="">A second item</li>
                  <li className="">A third item</li>
                  <li className="">A fourth item</li>
                  <li className="">And a fifth one</li>
                </ul>
              </div>
              <div className="col cCols">
                <p>Strategy</p>
                <ul class="list-group">
                  <li className="">An item</li>
                  <li className="">A second item</li>
                  <li className="">A third item</li>
                  <li className="">A fourth item</li>
                  <li className="">And a fifth one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row cRows">
          <div className="col">
            <div className="headline-xxs">
              <h1 data-aos="fade-up">What We Do</h1>
            </div>
          </div>
          <div className="col">
            <b>Front End Development</b>
            <div className="col">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                animi officia incidunt nisi. Quisquam quam eligendi quae
                exercitationem? Facilis nobis velit incidunt aliquid magnam quis
                illo esse omnis quisquam id sequi natus deleniti nesciunt, ea
                cupiditate animi! Qui deserunt placeat laborum autem cupiditate,
                corrupti blanditiis error tenetur soluta odio nostrum.
              </p>
            </div>
            <hr data-aos="fade-right" />
            <b>Front End Development</b>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
                nulla laboriosam distinctio debitis amet praesentium aliquam
                quia placeat assumenda cupiditate perferendis. Nihil harum ab,
                velit laboriosam, officiis odit, animi aliquid ipsam obcaecati
                porro ullam? Quod vero doloribus quidem eos ullam, impedit
                cupiditate rerum non assumenda consectetur optio quaerat quos
                mollitia?
              </p>
            </div>
            <hr data-aos="fade-right" />
            <b>Front End Development</b>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda officiis totam nisi magni adipisci ea quaerat porro
                unde explicabo quia quae iste facere tenetur voluptate nostrum
                nihil aspernatur blanditiis animi aut, vero id dolor neque
                mollitia quas. Tempora amet dignissimos architecto eos impedit.
                Quos ea quas consequatur assumenda cupiditate earum.
              </p>
            </div>
            <hr data-aos="fade-right" />
            <b>Front End Development</b>
            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                quos iusto facere libero officiis harum corporis, praesentium
                qui necessitatibus reprehenderit esse eaque. Officiis sunt a
                earum explicabo temporibus iusto praesentium quis nemo amet
                suscipit? Praesentium accusantium consequuntur iure. Animi, qui
                aspernatur accusantium eos esse fugit adipisci laudantium atque
                sint quas.
              </p>
            </div>
            <hr data-aos="fade-right" />
            <b>Front End Development</b>
            <div className="col">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                cupiditate nesciunt provident vel quibusdam natus inventore,
                enim quo mollitia. Maiores voluptate veniam, molestias quos
                officiis voluptates architecto facere, enim, soluta perferendis
                ipsa placeat nostrum odio harum repellendus. Saepe dolorum
                architecto, quas minus ex commodi cupiditate aperiam ipsam nulla
                aliquid nesciunt!
              </p>
            </div>
            <hr data-aos="fade-right" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>Who Are We</h1>
          </div>
          <div className="col" data-aos="fade-down">
            <div className="row" data-aos="fade-left">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium voluptatem soluta sit, doloribus tempora numquam sed!
                Laboriosam, doloremque. Cupiditate quas illo atque optio
                quaerat, esse necessitatibus, dolorem itaque culpa accusamus
                quos inventore consequatur corporis placeat consectetur est
                beatae. Facere, optio.
              </p>
              <div className="row" data-aos="fade-left">
                <div className="col">
                  <p>Strategy</p>
                  <ul class="list-group">
                    <li className="">An item</li>
                    <li className="">A second item</li>
                    <li className="">A third item</li>
                    <li className="">A fourth item</li>
                    <li className="">And a fifth one</li>
                  </ul>
                </div>
                <div className="col">
                  <p>Strategy</p>
                  <ul class="list-group">
                    <li className="">An item</li>
                    <li className="">A second item</li>
                    <li className="">A third item</li>
                    <li className="">A fourth item</li>
                    <li className="">And a fifth one</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
