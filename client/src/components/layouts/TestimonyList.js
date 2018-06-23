import React, {Component} from 'react';
import Testimony from '../containers/Testimony';

class TestimonyList extends Component {
    render() {
        return (
            <div id="testimony" className="py-5 text-white" style=
            {
                {
                    'background-image': 'url(https://pingendo.github.io/templates/sections/assets/test_lily.jpg)',
                    'background-size': 'cover'
                }
            }
            > 


           

            <Testimony temoignage="Yvon nous a sorti plusieurs fois du petrin il nous installé une arrivée et évacuation d'eau pour notre nouvelle machine à laver, réparer nos fuites sanitaires et de robinetterie de la cuisine. Nous avons tellement été satisfait de son travail
                                    et surtout de sa disponibilité que nous en avons profité pour lui demander de faire nos travaux pour notre salle de bain." name=" Marie " detailName="Particulier" />              


             <Testimony temoignage="Nous avons été satisfait des travaux effectués dans l'ensemble de nos bâtiments, notamment dans les écoles où les réparations, des sanitaires et robinetteries, sont récurrentes car ils sont sans cesse utilisés par les élèves. D'ailleurs nous continuons toujours à faire appel à ses services! " name="Vaitiare" detailName="Technicien Référent en Patrimoine Bâti, Mairie de Arue-Service Technique (2017)" />
            </div>
        )
    }
}

export default TestimonyList;   