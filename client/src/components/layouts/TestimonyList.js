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
                                    et surtout de sa disponibilité que nous avons profité pour lui demander de nous installer un nouveau pomo de douche." name=" Mary OCANOM " detailName="Particulier" photo="vai" />              


             <Testimony temoignage="" name=" Mary OCANOM " detailName="Particulier" photo="" />
            </div>
        )
    }
}

export default TestimonyList;   