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
                The Best
                <br />
                Agency for
                <br />
                Your Businnes
              </h4>
              {/* <!-- column end --> */}

              {/* <!-- column start --> */}
              <div class="col">
                <li class="list__item">
                  <a
                    href="index.html"
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    Home
                  </a>
                </li>
                <li class="list__item">
                  <a
                    href="about.html"
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    About
                  </a>
                </li>
                <li class="list__item">
                  <a
                    href="services.html"
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    Services
                  </a>
                </li>
                <li class="list__item">
                  <a
                    href="portfolio_fullscreen.html"
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    Portfolio
                  </a>
                </li>
                <li class="list__item">
                  <a
                    href="blog.html"
                    class="footer-nav-btn js-pointer-small js-animsition-link"
                  >
                    Blog
                  </a>
                </li>
                <li class="list__item">
                  <a
                    href="contact.html"
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
          <div class="row fRows2">
            <div class="col">
              <h5>Email:</h5>
              <p className="contact">
                <a href="#" class="email">
                  email@tumar_agency.com
                </a>
              </p>
              <p className="contact">
                <a href="#" className="email">
                  email@tumar_job.com
                </a>
              </p>
            </div>
            {/* <!-- column end --> */}

            {/* <!-- column start --> */}
            <div class="col">
              <h5>Phone:</h5>
              <p className="contact">
                <a href="#">+23 8 8532 7834</a>
              </p>
              <p className="contact">
                <a href="#">+23 8 9635 7335</a>
              </p>
            </div>
            {/* <!-- column end --> */}

            {/* <!-- column start --> */}
            <div class="col">
              <h5>Address:</h5>
              <p className="contact">
                <a href="#">
                  PO Box 223158 Oliver Street East Victoria 2006 UK
                </a>
              </p>
            </div>
          </div>
          {/* <!-- column end --> */}

          {/* <!-- column start --> */}
          <div class="row fRows3">
            <div class="col">
              {/* <!-- footer-social start --> */}
              <ul class="list list_row list_margin-30px">
                <li class="list__item">
                  <a href="#" class="flip-btn js-pointer-small" data-splitting>
                    Facebook
                  </a>
                </li>
                <li class="list__item">
                  <a href="#" class="flip-btn js-pointer-small" data-splitting>
                    Dribbble
                  </a>
                </li>
                <li class="list__item">
                  <a href="#" class="flip-btn js-pointer-small" data-splitting>
                    Instagram
                  </a>
                </li>
                <li class="list__item">
                  <a href="#" class="flip-btn js-pointer-small" data-splitting>
                    Youtube
                  </a>
                </li>
                <li class="list__item">
                  <a href="#" class="flip-btn js-pointer-small" data-splitting>
                    Behance
                  </a>
                </li>
                <li class="list__item">
                  <a href="#" class="flip-btn js-pointer-small" data-splitting>
                    Twitter
                  </a>
                </li>
              </ul>
              {/* <!-- footer-social end --> */}
            </div>
          </div>
        </div>
        {/* <!-- column end --> */}

        {/* <!-- column start --> */}
        <div class="twelve-columns padding-top-120">
          <div class="column-l-r-margin-10 pos-rel">
            <p class="copyright margin-right-30">
              &copy; Copyright 2020 TUMAR. Template by
              <a href="#" class="copyright__author js-pointer-small">
                Jinna Gik
              </a>
            </p>
            {/* <!-- to top btn start --> */}
            <a
              href="#up"
              class="scroll-to-btn js-pointer-large"
              data-scroll
              data-scroll-repeat
              data-scroll-to
            >
              <span class="scroll-to-btn__arrow"></span>{" "}
            </a>
            {/* <!-- to top btn end --> */}
          </div>
        </div>
        {/* <!-- column end --> */}

        {/* <!-- flex-container end --> */}
        {/* </div> */}
        {/* <!-- container end --> */}
      </footer>
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Footer;
