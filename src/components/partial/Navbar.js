import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <div class="header d-lg-flex justify-content-between align-items-center">
            <div class="header-agile">
              <h1>
                <Link to="/" class="navbar-brand logo">
                  <span class="fa fa-scissors" aria-hidden="true"></span>{" "}
                  Parukeri Estetike Lola{" "}
                </Link>
              </h1>
            </div>
            <div class="nav_w3ls">
              <nav>
                <label for="drop" class="toggle mt-lg-0 mt-1">
                  <span class="fa fa-bars" aria-hidden="true"></span>
                </label>
                <input type="checkbox" id="drop" />
                <ul class="menu">
                  <li class="mr-lg-3 mr-2 active">
                    <Link to="/">Krye</Link>
                  </li>
                  <li>
                    <Link to="/services">Sherbimet</Link>
                  </li>
                  <li class="mr-lg-3 mr-2">
                    <Link to="/gallery">Produktet</Link>
                  </li>
                  <li class="mr-lg-3 mr-2">
                    <Link to="/about">Rreth Nesh</Link>
                  </li>
                  {/* <li class="mr-lg-3 mr-2">
                    <Link to="/contact">Kontakt</Link>
                  </li> */}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Navbar;
