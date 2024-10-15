import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {HelmetProvider} from 'react-helmet-async';
import {CssBaseline} from '@mui/material'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <HelmetProvider>
    <CssBaseline>
    <App />
    </CssBaseline>
  </HelmetProvider>
  </>
);
