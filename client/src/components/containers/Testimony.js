import React, { Component } from 'react';

class Testimony extends Component {
    render() {
        return (
            <div class="row">
                <div class="col">
                    <img class="img-fluid d-block" src={'asset/'+ this.props.photo +'.jpg'}/>
                    <p class=""> {this.props.temoignage} </p>
                    <div class="blockquote">
                        <p class="mb-0"> {this.props.name} </p>
                        <div class="blockquote-footer"> {this.props.detailName} </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Testimony;