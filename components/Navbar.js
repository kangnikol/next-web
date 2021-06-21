const Navbar = () => {
  return (
    <nav class="navbar navbar-inverse navbar-expand-lg customNav fixed-top">
      <a class="navbar-brand" href="#">
        <span className="senja">Senja</span>
      </a>
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
