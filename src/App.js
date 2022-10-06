import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router.js";
import GlobalMetaTags from "./GlobalMetaTags.js";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalMetaTags />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
