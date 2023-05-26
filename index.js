import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { Provider as ReduxProvider } from "react-redux";
import {store} from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  
);
