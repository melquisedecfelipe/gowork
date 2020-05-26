import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import App from "./App";

// Declaração do link da api.
const client = new ApolloClient({
  uri: "https://api.graphql.jobs/",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
