import React from "react";

import logo from "../../assets/logo.svg";

import "./styles.scss";

function Header() {
  return (
    <nav>
      <div>
        <img src={logo} alt="GoWork Logo" />
      </div>
    </nav>
  );
}

export default Header;
