import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        return ( 
          <div className="" >
            
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 bg-secondary">
                <div className="col-md-12 decalTop"  id="gallery"> </div>
                  <h1 className="text-center display-3 bg-secondary py-2">Galerie</h1>
                </div>
              </div>
              <div className="row">
                <div className="p-0 col-md-4 col-12 col-sm-12 col-lg-4 col-xl-4">
                  <img src="../asset/G1.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="../asset/G2.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="../asset/G6.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="../asset/G3.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="../asset/G4.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="../asset/G5.jpg" className="img-fluid p-4 bg-secondary"/> </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Gallery;