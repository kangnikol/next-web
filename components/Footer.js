const Footer = () => {
  return (
    <div>
      <footer class="section-bg-dark" data-scroll-section>
        {/* <!-- container start --> */}
        <div class="container">
          {/* <!-- flex-container start --> */}
          <div class="container flex-align-center">
            {/* <!-- column start --> */}
            <div class="row fRows">
              <h4 class="col-10">
                Reach out
                <br />
                to us today
              </h4>
              {/* <!-- column end --> */}

              {/* <!-- column start --> */}
              <div class="col">
                <li class="list__item">
                  <a
                    href="# "
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    Home
                  </a>
                </li>
                <li class="list__item">
                  <a
                    href="#about"
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    About
                  </a>
                </li>

                <li class="list__item">
                  <a
                    href="#contact"
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    Contact
                  </a>
                </li>
              </div>
            </div>
            {/* <!-- column end --> */}
          </div>
          {/* <!-- flex-container end --> */}

          {/* <!-- flex-container start --> */}
          {/* <!-- column start --> */}
          <section id="contact">
            <div class="row fRows2">
              <div class="col">
                <h5>Email:</h5>
                <p className="contact">
                  <a href="mailto:info@senja.co.uk" class="email">
                    info@senja.co.uk
                  </a>
                </p>
              </div>
              {/* <!-- column end --> */}

              {/* <!-- column start --> */}
              <div class="col">
                <h5>Phone:</h5>
                <p className="contact">
                  <div className="phone">
                    <a href="tel://+6281224464422">+6281224464422</a>
                  </div>
                </p>
              </div>
              {/* <!-- column end --> */}

              {/* <!-- column start --> */}
              <div className="fRows3">
                <div class="row">
                  <div class="col">
                    {/* <!-- footer-social start --> */}
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/senjasolutions/">
                          Facebook
                        </a>
                      </li>
                      <li class="list__item">
                        <a href="https://www.instagram.com/senjasolusi/">
                          Instagram
                        </a>
                      </li>
                    </ul>
                    {/* <!-- footer-social end --> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- column end --> */}

          {/* <!-- column start --> */}
          <div class="row cr">
            <div class="col">
              <p class="text-center">&copy; Copyright 2021 Senja Solutions.</p>
              {/* <!-- to top btn start --> */}
              <a>
                <span class="scroll-to-btn__arrow"></span>{" "}
              </a>
              {/* <!-- to top btn end --> */}
            </div>
          </div>
          {/* <!-- column end --> */}

          {/* <!-- flex-container end --> */}
          {/* </div> */}
        </div>
        {/* <!-- container end --> */}
      </footer>
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Footer;
