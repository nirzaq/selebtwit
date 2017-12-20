import React from "react";
const Header = () => (
  
  <nav className="navbar has-shadow">
  <div className="navbar-brand">
    <a className="navbar-item navbar-logo" href="https://nirzaq.github.io/selebtwit/">
      <img src="%PUBLIC_URL%/twitter_circle_logo.svg" alt="Selebtwit Statistic Analysis" width="50" height="28" /> Selebtwit Statistic Analysis
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="https://nirzaq.github.io/selebtwit">
        Home
      </a>
      <a className="navbar-item" href="https://nirzaq.github.io/selebtwit/faq">
        FAQ
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">

      </div>
    </div>
  </div>
</nav>
);

export default Header