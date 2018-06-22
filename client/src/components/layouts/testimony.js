import React, {Component} from 'react';

class Testimony extends Component {
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="lead">
                                <i>"Yvon nous a sorti plusieurs fois du pétrin! Il nous installé une arrivée et évacuation d'eau pour notre nouvelle machine à laver, réparer nos fuites sanitaires et de robinetterie de la cuisine. Nous avons tellement été satisfait de son travail
                                    et surtout de sa disponibilité que nous avons profité pour lui demander de nous installer un nouveau pomo de douche."</i>
                                <br/>
                            </p>
                            <p className="lead m-0">
                                <b> Mary OCANOM </b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimony;   