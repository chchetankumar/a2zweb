import React, { Component } from 'react';
import TextControl from '../elements/form-input-text' ;
import updateState from './form-update-state';
import axios from 'axios';

export default class AddressForm extends Component {
    constructor(props) {
        super(props);
        this.updateState = updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.getInitialState();
        this.validators={
            firstName: 'not-null',
        };
    }

    getInitialState() {
        let state= {
            firstName: '',
            middleName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            area: '',
            landmark: '',
            city: '',
            state:'',
            country:'',
            pinCode:'',
            validity: {
                firstName: true,
                phoneNumber: true,
                pinCode: true,
            }
        };
        
        return state;
    }

    
    handleSubmit() {
        console.log(this.state);
    }

    render() {        
        return (<div className="form address-form">
                <div className="row">
                    <div className="col-md-12">
                        <label>
                        Name:
                        <TextControl type="text" onBlur={ this.updateState } name='firstName' valid={this.state.validity.firstName} error="First Name should contain only Letters and start with Capital letters" subscript="First Name"/> 
                        <TextControl type="text"   onBlur={ this.updateState } name='middleName' subscript="Middle Name"/> 
                        <TextControl type="text"  onBlur={ this.updateState } name='lastName' subscript="Last Name" /> 
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label>
                            Mobile Phone: 
                            <TextControl type="text" onBlur={ this.updateState } name='phoneNumber' error="Phone Numbers should contain only numbers" valid={this.state.validity.phoneNumber} /> 
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label> 
                            Address Line1: <TextControl type="text" onBlur={ this.updateState } name='address'  /> 
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>
                            Pin Code: <TextControl type="text" onBlur={ this.fetchAndUpdateState } name='pinCodes' valid={this.state.validity.pinCode} /> 
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label>
                            Area: <TextControl type="text" onBlur={ this.updateState } name='area'  /> 
                        </label>
                    </div>              
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>
                            Landmark: <TextControl type="text" onBlur={ this.updateState } name='landmark' /> 
                        </label>
                    </div> 
                    <div className="col-md-6">
                        <label>
                            City: <TextControl type="text" onBlur={ this.updateState } name='city' /> 
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label>
                            State:  <TextControl type="text" onBlur={ this.updateState } name='state' /> 
                        </label>
                    </div>
                    <div className="col-md-6">
                        <label>
                            Country: <TextControl type="text" onBlur={ this.updateState } name='country' /> 
                        </label>
                    </div>
                </div>
                <div class="row pl-4">
                    <span className="col-md-3" key="l_s5"> <input className="btn btn-primary" type="submit" value="Submit" onClick={this.handleSubmit} /> </span>
                    <span className="col-md-3" key="l_s6"> <input type="button" className="btn btn-primary" value="Reset" /> </span>
                </div>
        </div>);
    }
}
    
