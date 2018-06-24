import React, { Component } from 'react';
//import { Nav, NavItem } from 'react-bootstrap';


 
class NavbarHp extends Component {
    render() {
        return (  
            <nav className="navbar navbar-expand-md bg-secondary navbar-dark sticky-top shadow" id="myScrollspy">
                <div className="container">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav nav-pills nav-stacked">
                        <li className="nav-item">
                            <a className="nav-link text-white js-scrollTo" href="#description">La Société</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link text-white js-scrollTo" href="#service">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white js-scrollTo" href="#gallery">Galerie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white js-scrollTo" href="#testimony ">Temoignage</a>
                        </li>
                    </ul>
                    <a className="btn btn-primary mx-3" href="tel:+68987776383">Appeler</a>
                    <a className="btn btn-primary js-scrollTo" href="#devis">Demander un Devis&nbsp;</a>
                </div>
                </div>
          </nav>
  
          )
      }
  }

export default NavbarHp;