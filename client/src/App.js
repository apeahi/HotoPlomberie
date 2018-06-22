import React, { Component } from 'react';
import './App.css'; /* lien vers le fichier css */ 
import Home from './components/layouts/Home';
import Description from './components/layouts/Description';
import SocialBar from './components/layouts/SocialBar';
import Footer from './components/layouts/Footer';
import Gallery from './components/layouts/Gallery';
import Quotation from './components/layouts/Quotation';
import TaskList from './components/layouts/TaskList';
import Testimony from './components/layouts/TestimonyList';
import NavbarHp from './components/layouts/NavbarHp';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <NavbarHp />
          <Home/>
          <Description/>
          <SocialBar/>
          <TaskList/>
          <Gallery/>
          <Testimony/>
          <Quotation/>
          <Footer/>
        </div>

      </div>  
    );
  }
}

export default App;
