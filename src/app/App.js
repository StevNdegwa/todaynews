import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {IconContext} from "react-icons";

import "./index.scss";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import SiteContext from "./SiteContext";

const C19Tracker = React.lazy(()=>import("./components/C19Tracker"))

function App() {
  const [country, setCountry] = React.useState("ke");
  return (<Router>
      <SiteContext.Provider value={{country, setCountry:(c)=>setCountry(c)}}>
      <IconContext.Provider value={{className:"news-app-icons"}}>
        <Switch>
          <Route path="/c19tracker">
            <React.Suspense fallback={<div>Please Wait...</div>}>
              <C19Tracker/>
            </React.Suspense>
          </Route>
          <Route path="/about" component={About}/>
          <Route path="/contact-us" component={ContactUs}/>
          <Route path="/" exact component={Home}/>
        </Switch>
      </IconContext.Provider>
      </SiteContext.Provider>
    </Router>);
}

export default App;
