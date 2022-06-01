import React from "react";

function Header() {
  return (
    <header id="Header">
        <div className="container" style={{marginTop: "1.25em"}}>
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <img src="/Images/sub-logo1.png" />
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Team">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <a href="https://twitter.com" className="socilLinks" style={{margin: "1.5em"}}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://discord.gg" className="socilLinks">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </nav>
        </div>
    </header>
  );
}

export default Header;
