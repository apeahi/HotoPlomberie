import React, { Component } from 'react';

class Task extends Component {
    render() {
        return (
            <div className="col-md-4 text-center col-12 col-sm-12 col-lg-4 col-xl-4 py-5">
                <div className="row" >
                    <div className="text-center col-md-12 col-12" >
                        <i className={'d-block mx-auto   ' + this.props.icon}></i>
                    </div>
                </div>
                <div className="col-md-12 py-3 col-12 col-sm-12">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <h5 className="mb-3 text-primary text-center" data-scroll="toggle(.fromRightIn, .fromRightOut)">
                                <b>{this.props.title}</b>
                            </h5>
                            <p className="my-1" data-scroll="toggle(.fromLeftIn, .fromLeftOut)"> {this.props.description} </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;