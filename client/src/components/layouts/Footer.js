import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div class="bg-dark text-white">
                <div class="container">
                    <div class="row">
                        <div class="p-4 col-md-3">
                            <h2 class="mb-4 text-secondary text-center">Hoto Plomberie Services</h2>
                            <p class="text-white">Votre plombier de Tahiti, se déplace à votre convenance et gratuitement, prêt à vous soulager de tout vos tracas de plomberie</p>
                        </div>
                        <div class="p-4 col-md-3">
                            <h2 class="mb-4 text-secondary text-center">Adresse</h2>
                             <p>
                                 <a href="https://goo.gl/maps/AUq7b9W7yYJ2" class="text-white" target="_blank">
                                <i class="fa d-inline mr-3 fa-map-marker text-secondary"></i>H</a>itiaa&nbsp; Pk 39,900 c/mont
                            </p>
                        </div>
                        <div class="p-4 col-md-3">
                            <h2 class="mb-4 text-secondary text-center">Horaire</h2>
                            <p class="text-center">Du Lundi au Samedi
                                <br/> 24h/24
                            </p>
                        </div>
                        <div class="p-4 col-md-3">
                            <h2 class="mb-4 text-secondary text-center">Contact</h2>
                            <p>
                                <a href="tel:+246 - 542 550 5462" class="text-white">
                                <i class="fa d-inline mr-3 text-secondary fa-phone"></i>+</a>689 87&nbsp; 72 13 45
                            </p>
                            <p>
                                <a href="mailto:info@pingendo.com" class="text-white">
                                <i class="fa d-inline mr-3 text-secondary fa-envelope-o"></i>info@hotoplomberie.com</a>
                             </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mt-3">
                             <p class="text-center text-white">© Copyright 2018 Hoto Plomberie N° TAHITI&nbsp;588426 - Powered By Vai &amp; Arii  </p>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;