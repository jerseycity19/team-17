import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ValidatedLoginForm from "./ValidatedLoginForm";
import ValidatedRegisterForm from "./ValidatedRegisterForm";

function App() {
  return (
    <div className="App">
      <h1>Log In</h1>
      <h3> Login with username or email address.</h3>
      <ValidatedLoginForm />
      <h1> Register </h1>
      <h3> Use email address or create username to sign up </h3>
      <ValidatedRegisterForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
