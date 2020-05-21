import React from "react";

import { FaGithub } from "react-icons/fa";

import "./styles.scss";

function Header() {
  return (
    <nav>
      <div>
        <p>
          go<span>work</span>
        </p>
        <span>
          <p>Give me star</p>
          <a
            href="https://github.com/melquisedecfelipe/gowork"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Header;
