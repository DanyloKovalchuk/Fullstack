// Routing - is navigation through the pages(from one page to another ect)
// routing package installation: npm install react-router-dom
// Basic router implementation code : import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import HomePage from "./HomePage"
import NotFound from "./NotFound"

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/contact" element={<ContactUs />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
