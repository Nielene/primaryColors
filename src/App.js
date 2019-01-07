import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Primaries from "./primaries.js";
import WarmUp from "./WarmUp.js";
import SignUp from "./SignUp.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
        <WarmUp />
      </div>
    );
  }
}

export default App;

// const rootElement = document.getElementById(
//   "root"
// );
// // ReactDOM.render(<Primaries />, rootElement);
// ReactDOM.render(<WarmUp />, rootElement);
