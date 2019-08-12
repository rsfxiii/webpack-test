import React from "react";
import ReactDOM from "react-dom";
import {AppProvider} from "@shopify/polaris";

import App from "./components/provider";
import "@shopify/polaris/styles.css";



ReactDOM.render(<AppProvider><App /></AppProvider>, document.getElementById("root"));
