import React, { Component } from 'react';
//import { Nav, NavItem } from 'react-bootstrap';



class NavbarHp extends Component {
    render() {
        return ( 
            <nav id="navigation" class="navbar  bg-secondary navbar-dark sticky-top">
              
                <ul class=" mr-auto nav nav-pills">
                  <li class="nav-item px-3">
                      <a class="nav-link text-white" href="#description">La Société</a>
                  </li>
                  <li class="nav-item px-3">
                      <a class="nav-link text-white" href="#service">Services</a>
                  </li>
                  <li class="nav-item px-3">
                      <a class="nav-link text-white" href="#gallery">Galerie</a>
                  </li>
                  <li class="nav-item px-3">
                      <a class="nav-link text-white" href="#testimony">Temoignage</a>
                  </li>


                </ul>
                <a class="btn btn-primary mx-3" href="tel:+68987776383">Appeler</a>
                <a class="btn btn-primary" href="#devis">Demander un Devis&nbsp;</a>
          
            </nav>
  
          )
      }
  }

export default NavbarHp;