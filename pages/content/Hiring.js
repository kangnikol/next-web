const Hiring = () => {
  return (
    <div className="hiring">
      <div className="title">
        <h1>We are hiring!</h1>
      </div>
      <div className="size">
        <div className="video">
          <div class="embed-responsive widescreen">
            <iframe
              width="1200"
              height="600"
              src="https://www.youtube.com/watch?v=dgT_la-173g"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <p>
        Start or boost your career at Senja, email us your CV{" "}
        <a href="mailto:apply@senja.co.uk"> here!</a>
      </p>
    </div>
  );
};

export default Hiring;
