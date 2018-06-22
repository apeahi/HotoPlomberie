import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        return ( 
          <div className="" id="gallery">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 bg-secondary">
                  <h1 className="text-center display-3 bg-secondary py-2">Galerie</h1>
                </div>
              </div>
              <div className="row">
                <div className="p-0 col-md-4 col-12 col-sm-12 col-lg-4 col-xl-4">
                  <img src="https://pingendo.github.io/templates/sections/assets/gallery_dogs.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="https://pingendo.github.io/templates/sections/assets/gallery_bird.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="https://pingendo.github.io/templates/sections/assets/gallery_farm.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="https://pingendo.github.io/templates/sections/assets/gallery_girl.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="https://pingendo.github.io/templates/sections/assets/gallery_nose.jpg" className="img-fluid p-4 bg-secondary"/> </div>
                <div className="col-md-4 p-0 col-12">
                  <img src="https://pingendo.github.io/templates/sections/assets/gallery_feet.jpg" className="img-fluid p-4 bg-secondary"/> </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Gallery;