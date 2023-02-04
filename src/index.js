import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import {FirebaseProvider} from "./Firebase/Firebase"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FirebaseProvider><App /></FirebaseProvider>);
