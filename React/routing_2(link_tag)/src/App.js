// implementing Link tag

import React from "react";
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Blog from "./Blog";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

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
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/contactus" element={<ContactUs />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
