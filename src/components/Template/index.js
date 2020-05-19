import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Top from "../Top";

function Template({ children }) {
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
