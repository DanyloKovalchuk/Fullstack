// useLocation
// useLocation - is a hook to used to access and transfer data and object that passes from parent object to child object.

import React from "react";
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Blog from "./Blog";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> 
              </li>
              <li>
                <Link to="/aboutus">About Us</Link> 
              </li>
              <li>
                <Link to="/products">Our Products</Link> 
              </li>
              <li>
                <Link to="/blog">Our Blog</Link> 
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link> 
              </li>
              <li>
                <Link to="/parent">Parent Component</Link> 
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/parent" element={<ParentComponent />}/>
            <Route path="parent/child" element={<ChildComponent />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
