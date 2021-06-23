import React from "react";

const Navbar = () => {
  React.useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("senja").style.fontSize = "100%";
      } else {
        document.getElementById("senja").style.fontSize = "200%";
      }
    }
  });

  return (
    <nav
      class="navbar navbar-inverse navbar-expand-lg customNav fixed-top"
      id="navbarNav"
    >
      <a class="navbar-brand" href="#" id="navbar-brand">
        <span className="senja" id="senja">
          Senja
        </span>
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
