import React, { useEffect } from "react";

import Footer from "../Footer";
import Header from "../Header";
import Top from "../Top";

// Por padrão o template recebe o children do pai como props.
function Template({ children }) {
  // Utilizo o useEffect para realizar o scroll até o topo da página, na renderização do componente.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Top />
    </>
  );
}

export default Template;
