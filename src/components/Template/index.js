import React, { useEffect } from "react";

import Footer from "../Footer";
import Header from "../Header";
import Top from "../Top";

function Template({ children }) {
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
