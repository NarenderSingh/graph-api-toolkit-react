import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

Providers.globalProvider = new Msal2Provider({
  clientId: "e0b7bcfa-5676-4491-a00b-6b567892cd97",
  scopes: [
    "calendars.read",
    "user.read",
    "openid",
    "profile",
    "people.read",
    "user.readbasic.all",
  ],
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
