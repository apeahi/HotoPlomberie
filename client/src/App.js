import React, { Component } from 'react';
import logo from './logo.svg'; /* lien vers la page  */
import './App.css'; /* lien vers le fichier css */ 
import Home from './components/layouts/Home';
import Description from './components/layouts/Description';
import SocialBar from './components/layouts/SocialBar';
import Footer from './components/layouts/Footer';
import Gallery from './components/layouts/Gallery';
import Quotation from './components/layouts/Quotation';
import TaskList from './components/layouts/TaskList';
import Testimony from './components/layouts/Testimony';
import NavbarHp from './components/layouts/NavbarHp';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <NavbarHp />
          <div data-spy="scroll" data-target="#navigation" data-offset="0">
          <Home/>
          <Description/>
          <SocialBar/>
          <TaskList/>
          <Gallery/>
          <Testimony/>
          <Quotation/></div>
          <Footer/>
        </div>

      </div>  
    );
  }
}

export default App;
