import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { HashRouter } from "react-router-dom";

import App from "./components/App/App";

const Global = createGlobalStyle`
  :root {
    --font-famly: "Roboto", sans-serif;
    --fs-sm: 0.875rem;
    --fw-regular: 400;
    --line-height: 1.3125rem;
    --letter-spacing: 0.01563rem;

    --color-white: #ffffff;
    --color-black: #000000;
    --color-blue: #2196F3;
    --color-hover: #1E88E5;

    --box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.40);
    --transition: all 0.2s ease-in-out;
  }

  * {
    font-family: var(--font-famly);
    font-weight: var(--fw-regular);
    box-sizing: border-box;
  }

  html {
    /* scroll-behavior: smooth;
    scroll-padding: 1rem;
    scrollbar-gutter: stable; */
  }

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: var(--color-white);
    color: var(--color-white);
  }

  /* ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-grey);
    border-radius: 0.5rem;
  } */

  @font-face {
    font-family: "Roboto";
    font-weight: 700;
    src: url("./resources/fonts/Roboto-Regular.woff2") format(".woff2");
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Global />
    <App />
  </HashRouter>
);
