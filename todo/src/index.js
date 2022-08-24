//These imports are found in the dependancies
//This is the starting point of what is called when we run our app
import React from "react";
import ReactDOM from "react-dom";
//Now all components under index.js root has access to this css
import "./index.css";
// we can avoid the js extension because for js files it can be omitted
import App from "./App";
// This code of <App/> only works since we downloaded the depnandcies w/ npm build. This code is JSX code
//This tells react to render the App element into where the dev root is
ReactDOM.render(<App />, document.getElementById("root"));
