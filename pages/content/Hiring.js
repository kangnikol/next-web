const Hiring = () => {
  return (
    <div className="hiring">
      <div className="container">
        <div className="flex">
          <div className="title">
            <h1>We are hiring!</h1>
          </div>
          <div className="container">
            <div className="video">
              <div class="embed-responsive widescreen">
                <div
                  class="onq-youtube-player"
                  style="width: 640px; display: block; position: relative; cursor: pointer; height:360px; overflow: hidden; margin: 20px 0;"
                  data-id="dgT_la-173g"
                  data-width="640"
                  data-height="360"
                  data-ssv="false"
                  data-spc="true"
                  data-sta="true"
                  data-afs="true"
                  data-dkc="false"
                  data-ecc="false"
                  data-eap="false"
                >
                  <img
                    src="//i.ytimg.com/vi/dgT_la-173g/hqdefault.jpg"
                    style="display: block; left: 0; margin: auto; width: 100%; height: 100%; position: absolute; right: 0;"
                  />
                  <div style='height: 72px; width: 72px; left: 50%; top: 50%; margin-left: -36px; margin-top: -36px; position: absolute; background: url("https://www.onqmarketing.com.au/wp-content/plugins/onq-youtube-embed-generator/playbutton.png") no-repeat; background-size: 72px;'></div>
                </div>
              </div>
            </div>
            <p>
              Start or boost your career at Senja, email us your CV{" "}
              <a href="mailto:apply@senja.co.uk"> here!</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
