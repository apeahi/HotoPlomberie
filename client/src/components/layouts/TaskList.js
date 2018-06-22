import React, { Component } from 'react';
import Task from '../containers/Task';

class TaskList extends Component {
    render() {
        return (
            <div id="service">   
                <div className="bg-light p-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 data-scroll="toggle(.fromLeftIn, .fromLeftOut)" className="display-3 fromLeftIn" contenteditable="true" >Services</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-2 text-center mx-auto bg-light w-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mx-auto" data-scroll="toggle(.fromRightIn, .fromRightOut)">
                                <p class="">Vous avez une fuite d'eau? Un problème de tuyauterie? Vous souhaitez vous lancer dans des projets de construction ou de rénovation? Ayez un aperçu des différents services que je propose! N'hésitez plus, appelez votre plombier de Tahiti.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light py-2" >
                    <div className="container" >
                        <div className="row">
                            <Task icon="fa fa-5x fa-shower" title="Equipement sanitaire" description="Pour la réparation de votre matériel, je peux vous assurer de vous fournir au plus vite les fournitures provenant directement de chez nos partenaires locaux. "/>
                            <Task icon="fab fa-5x fa-stumbleupon" title="Canalisation" description="L'installation de nouvelles canalisations ou la réparation est un travail quotidien que je saurais vous faire sans aucun soucis."/>
                            <Task icon="fa fa-5x fa-swimming-pool" title="Piscine" description="Le réseau d'eau peut rencontrer fréquement des petits soucis en cas de mauvais entretien, et l'intervention d'un professionnel est fortement conseillé. "/>
                            <Task icon="fa fa-5x fa-thermometer-half" title="Chauffe-eau à gaz/solaire" description=">Bien que l'on vit sous les tropiques, une bonne douche chaude n'est jamais de refus. Si vous avez besoin d'un nouveau chauffe-eau solaire, et surtout adapté à votre famille ou logement, contactez moi dès à présent."/>
                            <Task icon="fa fa-5x fa-bath" title="Evacuation d'eau pluviale / eaux usées" description="La saison des pluies étant marqué dans nos archipels, pensez à vous équiper avec des goutières adaptées. De même que pour vos eaux usées, anticipez les mauvaises surprises. "/>
                            <Task icon="fa fa-5x fa-tint" title="Alimentation d'eau" description="Besoin d'un nouveau robinet dans votre jardin? Dans votre salle de bain?Ne vous tracassez plus, je m'occupe des travaux de A à Z."/>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default TaskList;