import React, {Component} from 'react';

class Home extends Component {
    render() {
        return ( 
          <div className="py-5 text-center cover" style= {{
              'background-image': 'url(/asset/Plomberie-Longueuil.jpg)',
              'background-size': 'cover',
              'background-repeat': 'repeat'
                }} >
               <div className="container py-5">
                 <div className="row">
                    <div className="col-md-12">
                       <h1 className="display-3 mb-4 text-secondary">Hoto Plomberie services</h1>
                        <a className="btn btn-lg mx-1 btn-secondary" href="tel:+68987776383">Appeler</a>
                        <a href="#devis" className="btn btn-lg mx-1 btn-secondary">Demander un Devis</a>
                    </div>
                  </div>
               </div>
          </div>   
        )       
    }
}

export default Home;    