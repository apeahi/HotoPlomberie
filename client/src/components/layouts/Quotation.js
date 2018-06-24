import React, { Component } from 'react';

class Quotation extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div id="devis" className="py-5" style= {{'background-image': 'url(asset/20180620_094159.jpg)', 'background-position':'center center'}} >
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-white text-center align-self-center">
                  <h3 className="display-3 text-center">Devis</h3>
                  <p className="">En cas de doute ou si vous prévoyez un projet, écrivez nous dans le formulaire mis à votre disposition et nous vous répondrons dans les plus brefs délais.</p>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body p-5 text-left">
                      <form method="POST" action="https://formspree.io/hotoplomberie.services@gmail.com">
                        <div className="form-group">
                          <label>Nom</label>
                          <input className="form-control" type="text" name="Nom" placeholder="Votre Nom" required="required"/> </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1" >Email</label>
                          <input className="form-control" type="email" name="Email" id="inlineFormInput" placeholder="Votre Email" required="required"/> </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Téléphone</label>
                          <input className="form-control" type="text" name="Téléphone" id="inlineFormInput" placeholder="Votre Numéro" required="required"/> </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Objet
                            <br/> </label>
                          <select className="custom-control custom-select" type="text" name="Objet"  required="required">
                            <option selected="">Ouvrir le menu déroulant</option>
                            <option value="Réparation">Réparation</option>
                            <option value="Rénovation">Rénovation</option>
                            <option value="Construction">Construction</option>
                            <option value="Autres">Autres</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label for="exampleInputEmail1">Texte</label>
                          <textarea name="message" type="text" className="form-control form-control-sm h-25 text-left" id="inlineFormInput" placeholder="Votre Texte" required="required"/> </div>
                        <button type="submit" className="btn btn-secondary btn-block" >Envoyer</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


export default Quotation;



