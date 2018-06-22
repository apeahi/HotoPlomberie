import React, { Component } from 'react';
//import { Nav, NavItem } from 'react-bootstrap';


 
class NavbarHp extends Component {
    render() {
        return ( 
            <nav class="navbar navbar-expand-md bg-secondary navbar-dark sticky-top" id="myScrollspy">
                <div class="container">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto nav nav-pills nav-stacked">
                        <li class="nav-item px-3 active">
                            <a class="nav-link text-white" href="#description">Description</a>
                        </li>
                        <li class="nav-item px-3" >
                            <a class="nav-link text-white" href="#service">Tache</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#gallery">Galerie</a>
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#testimony ">Temoignage</a>
                        </li>
                    </ul>
                    <a class="btn btn-primary mx-3" href="tel:+68987776383">Appeler</a>
                    <a class="btn btn-primary" href="#devis">Demander un Devis&nbsp;</a>
                </div>
                </div>
          </nav>
  
          )
      }
  }

export default NavbarHp;