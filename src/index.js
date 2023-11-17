import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
// import App from './App';

// const Hello = (props) =>{
//   console.log(props.public);
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter >
      <App />
    </HashRouter>
    {/* <Hello public = {process.env.PUBLIC_URL}/> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
