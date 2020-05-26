import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.scss";

function NotFound() {
  // Declaração do hook useHistory do react router dom, para realizar redirecionamentos.
  const history = useHistory();

  return (
    <main className="not__found">
      {/* Utilizo o goBack para voltar para página anterior. */}
      <FiArrowLeft color="#FFC220" size={50} onClick={() => history.goBack()} />
      <p>Página não encontrada...</p>
    </main>
  );
}

export default NotFound;
