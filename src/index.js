import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";  
import { BrowserRouter } from "react-router-dom";
import { FilterProvider, ProductProvider } from "./context";

// Call make Server

ReactDOM.render(
  <React.StrictMode>
      <FilterProvider>
        <ProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductProvider>
      </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
