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
                  <li className="">Digital Strategy</li>
                  <li className="">Content Strategy</li>
                  <li className="">Responsive development</li>
                  <li className="">Web Design</li>
                  <li className="">Motion Design</li>
                  <li className="">Data Analyst</li>
                  <li className="">Brand Experience</li>
                </ul>
              </div>
              <div className="col cCols">
                <p>Development</p>
                <ul class="list-group">
                  <li className="">Design Direction</li>
                  <li className="">Web & Mobile UI</li>
                  <li className="">Creative Concepts & Ideas</li>
                  <li className="">User Experience Design</li>
                  <li className="">Branding & Identity</li>
                  <li className="">Websites & Web Applications</li>
                  <li className="">E-Commerce</li>
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
            <b>Back End Development</b>
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
            <b>User Experience Design</b>
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
            <b>User Interface Design</b>
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
            <b>Motion Design</b>
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
        <div className="row cRows">
          <div className="col">
            <h1>Work Process</h1>
          </div>
          <div className="col">
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
                  <ul class="list-group">
                    <b>Brainstoriming</b>
                    <p>
                      Lomo dreamcatcher bushwick gastropub swag. Hammock
                      sriracha paleo, iPhone swag af flexitarian hella pickled
                      neutra pug. Trust fund chicharrones iPhone stumptown chia.
                      Godard 3 wolf moon tacos try-hard. Shoreditch cliche marfa
                      godard gochujang kinfolk hoodie you probably haven't heard
                      of them echo park DIY tilde PBR&B.
                    </p>
                  </ul>
                </div>
                <div className="col">
                  <ul class="list-group">
                    <b>Brainstoriming</b>
                    <p>
                      Lomo dreamcatcher bushwick gastropub swag. Hammock
                      sriracha paleo, iPhone swag af flexitarian hella pickled
                      neutra pug. Trust fund chicharrones iPhone stumptown chia.
                      Godard 3 wolf moon tacos try-hard. Shoreditch cliche marfa
                      godard gochujang kinfolk hoodie you probably haven't heard
                      of them echo park DIY tilde PBR&B.
                    </p>
                  </ul>
                </div>
              </div>
              <div className="row" data-aos="fade-left">
                <div className="col">
                  <ul class="list-group">
                    <b>Brainstoriming</b>
                    <p>
                      Lomo dreamcatcher bushwick gastropub swag. Hammock
                      sriracha paleo, iPhone swag af flexitarian hella pickled
                      neutra pug. Trust fund chicharrones iPhone stumptown chia.
                      Godard 3 wolf moon tacos try-hard. Shoreditch cliche marfa
                      godard gochujang kinfolk hoodie you probably haven't heard
                      of them echo park DIY tilde PBR&B.
                    </p>
                  </ul>
                </div>
                <div className="col">
                  <ul class="list-group">
                    <b>Brainstoriming</b>
                    <p>
                      Lomo dreamcatcher bushwick gastropub swag. Hammock
                      sriracha paleo, iPhone swag af flexitarian hella pickled
                      neutra pug. Trust fund chicharrones iPhone stumptown chia.
                      Godard 3 wolf moon tacos try-hard. Shoreditch cliche marfa
                      godard gochujang kinfolk hoodie you probably haven't heard
                      of them echo park DIY tilde PBR&B.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End */}
        <div className="row cRows">
          <div className="col">
            <h1>Our Skills</h1>
          </div>
          <div className="col">
            <div className="row ourSkill">
              <div className="col aStroke">+45</div>
              <div className="col">
                <p>Awwards</p>
              </div>
              <div className="col">
                <ul class="list-group">
                  <li className="">Digital Strategy</li>
                  <li className="">Content Strategy</li>
                  <li className="">Responsive development</li>
                </ul>
              </div>
            </div>
            {/* End */}
            <div className="row ourSkill2">
              <div className="col aStroke">+532</div>
              <div className="col">
                <p>Projects</p>
              </div>
              <div className="col">
                <ul class="list-group">
                  <li className="">Digital Strategy</li>
                  <li className="">Content Strategy</li>
                  <li className="">Responsive development</li>
                </ul>
              </div>
            </div>
            {/* End */}
            <div className="row ourSkill2">
              <div className="col aStroke">100%</div>
              <div className="col">
                <p>Requirement</p>
              </div>
              <div className="col">
                <ul class="list-group">
                  <li className="">Digital Strategy</li>
                  <li className="">Content Strategy</li>
                  <li className="">Responsive development</li>
                </ul>
              </div>
            </div>
            {/* End */}
            <div className="row ourSkill2">
              <hr />
              <div className="col aStroke">265</div>
              <div className="col">
                <p>Clients</p>
              </div>
              <div className="col">
                <ul class="list-group">
                  <li className="">Digital Strategy</li>
                  <li className="">Content Strategy</li>
                  <li className="">Responsive development</li>
                </ul>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default About;
