import React from "react";
import { FiLoader } from "react-icons/fi";

import "./styles.scss";

function Load() {
  return (
    <main className="load">
      <FiLoader color="#FFC220" size={50} />
      <p>Carregando vagas...</p>
    </main>
  );
}

export default Load;
