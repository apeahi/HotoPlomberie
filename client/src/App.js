import React, { Component } from 'react';
import logo from './logo.svg'; /* lien vers la page  */
import './App.css'; /* lien vers le fichier css */ 
import Home from './components/layouts/home';
import Description from './components/layouts/description';
import Fb from './components/layouts/fb';
import Footer from './components/layouts/footer';
import Gallery from './components/layouts/gallery';
import Navbar from './components/layouts/navbar';
import Quotation from './components/layouts/quotation';
import Task from './components/layouts/task';
import Testimony from './components/layouts/testimony';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> {/* Logo sur la page  */}
          <h1 className="App-title">Hoto Plomberie</h1> {/* Titre dans la page  */}
        </header>

        <div>
          <Home/>
          <Description/>
          <Fb/>
          <Footer/>
          <Gallery/>
          <Navbar/>
          <Quotation/>
          <Task/>
          <Testimony/>
        </div>

      </div>  
    );
  }
}

export default App;
