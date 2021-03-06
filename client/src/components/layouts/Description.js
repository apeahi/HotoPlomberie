import React, {Component} from 'react';

class Description extends Component {
    render() {
        return (
         
 
            <div className="p-2">
             <div className="col-md-12 decalTop"  id="description"> </div> 
            <div>
            <div className="container">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <h1 className="">La société</h1>
                </div>
              </div>
            </div>
          </div>
        <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4" data-scroll="toggle(.fromRightIn, .fromRightOut)">
              <img className="img-fluid d-block rounded-circle mx-auto" src="asset/photo.jpg" alt="HotoPlomberie Photo Yvon Teauroa" /> </div>
            <div className="col-md-8 text-center">
              <p className="lead">HotoPlomberie Service est une entreprise familiale située à Tahiti, montée par Yvon en 2001 .
                <br/> &nbsp; Après l'obtention de son CAP et BEP de plombier à Raiatea et Tahiti, il décida de créer sa propre société quelques années plus tard avec son épouse qui assure toute la partie administrative.
                <br/> &nbsp; Ayant acquis de solides compétences grâce à ses expériences professionnelles, Yvon a aussi pu développer sa polyvalence dans les travaux annexes à son corps de métier tels que carreleur, plâtrier peintre et électricien.
                Il saura vous proposer un chantier clé en main en assurant si vous le souhaitez toute la coordination des opérations.&nbsp;
                <br/> Mr Yvon Teauroa intervient sur l’ensemble de l’île de Tahiti ainsi que dans les îles, dans le neuf et la rénovation; en plomberie, sanitaire y compris les dépannages.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
        )
    }
}

export default Description; 