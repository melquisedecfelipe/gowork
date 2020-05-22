import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.scss";

function NotFound() {
  const history = useHistory();

  return (
    <main className="not__found">
      <FiArrowLeft color="#FFC220" size={50} onClick={() => history.goBack()} />
      <p>Página não encontrada...</p>
    </main>
  );
}

export default NotFound;
