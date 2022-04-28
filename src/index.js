import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-1l7wc2nx.us.auth0.com"
      clientId="IFPG0v4wF6eoxvIH0fDFVenjnJs8wlcH"
      redirectUri="https://resourcelog.netlify.app/homepage"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
