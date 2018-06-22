import React, { Component } from 'react';

class SocialBar extends Component {
    render() {
        return (
            <div id="socialBar"class="py-3 bg-secondary">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 my-3">
                            <h1 class="display-4 text-white text-md-left text-center"  data-scroll="toggle(.scaleDownIn, .scaleDownOut)">On Aime les Nouveau Amis&nbsp;</h1>
                        </div>
                        <div class="col-md-4  text-center align-self-center">
                            <a href="https://www.facebook.com/" target="_blank">
                                <i class="fab fa-fw fa-facebook-f text-white mx-3 fa-5x"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}

export default SocialBar;