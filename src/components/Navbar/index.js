import React, { useState } from "react";
import "./boot.css";
//import react pro sidebar components

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./search.css";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Form,
} from "./NavbarElements";

const Navbar = () => {
  //create a custom function that will change menucollapse state from false to true and true to false

  return (
    <>
      <Nav>
        <a
          class="btn btn-primary"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <img src={require("./menu.png")} alt="logo" width="20px" />
        </a>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header bg-dark" >
          <NavBtn>
          <NavBtnLink to="/signin">Sign In/signup</NavBtnLink>
        </NavBtn>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body bg-dark" >
            <div class="offcanvas-body">
            
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                 
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
          <a class="nav-link" href="#">Radio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Podcast</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Music</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">India's Music</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Language</a>
        </li>
              </ul>
            </div>
          </div>
        </div>

        <NavLink to="/">
          <img src={require("../../images/gaana.png")} alt="logo" height="35px" />
        </NavLink>
        <Bars />

        <Form action="/" method="get">
          <input
            type="text"
            id="header-search"
            placeholder="🔎 "
            name="s"
          />
        </Form>
        <NavMenu>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Go add free</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin">Get gana plus</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In/signup</NavBtnLink>
        </NavBtn>
      </Nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">New Songs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Old Songs</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Moods & Generes
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Party</a></li>
            <li><a class="dropdown-item" href="#">Romance</a></li>
            <li><a class="dropdown-item" href="#">90's & early 2000's</a></li>
            <li><a class="dropdown-item" href="#">Retro</a></li>
            <li><a class="dropdown-item" href="#">Indie</a></li>
            <li><a class="dropdown-item" href="#">Bhakti</a></li>
            <li><a class="dropdown-item" href="#">EDM</a></li>
            <li><a class="dropdown-item" href="#">Ghazals</a></li>
            <li><a class="dropdown-item" href="#">Bhajan</a></li>
          </ul>

        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Album</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Radio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Podcast</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">My Music</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
