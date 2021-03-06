import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detalhe/:slud" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
