import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {IconContext} from "react-icons";

import "./index.scss";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (<Router>
      <IconContext.Provider value={{className:"news-app-icons"}}>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/contact-us" component={ContactUs}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </IconContext.Provider>
    </Router>);
}

export default App;
