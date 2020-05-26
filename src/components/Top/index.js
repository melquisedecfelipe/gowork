import React, { useCallback } from "react";

import { FiChevronUp } from "react-icons/fi";

import "./styles.scss";

function Top() {
  // Crio uma função utilizando o useCallback para realizar o scroll até o topo da página.
  const handleTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <button className="top" onClick={() => handleTop()}>
      <FiChevronUp color="#f9f9f9" size={20} />
    </button>
  );
}

export default Top;
