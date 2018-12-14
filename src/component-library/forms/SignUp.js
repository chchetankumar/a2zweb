import React from 'react';
import TextControl from '../elements/form-input-text';
import AZButton from '../elements/form-input-button';

import { updateStateEvent } from './form-update-state';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.updateStateEvent = updateStateEvent.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validators = {
            'firstName': 'not-null',
        };
        
    }
    
    getInitialState() {
        return {
            'firstName': '',
            'middleName': '',
            'lastName':  '',
            'email': '',
            'phoneNumber': '',
            'validity': {
                'firstName': true,
                'middleName': true,
                'lastName': true,
                'email': true,
                'phoneNumber': true
            }
            
        };
    }


    handleSubmit() {

        console.log(this.state);    
    }
   
    render() {
    return(
        <div className="form sign-up">
            <div className="row">
                <div className="col-md-12">
                    <label>
                        Name:
                        <TextControl type="text" onBlur={ this.updateStateEvent } name='firstName' valid={this.state.validity.firstName}  subscript="First Name"/> 
                        <TextControl type="text"  valid={this.state.validity.middleName} onBlur={ this.updateStateEvent } name='middleName' subscript="Middle Name"/> 
                        <TextControl type="text"  valid={this.state.validity.lastName} onBlur={ this.updateStateEvent } name='lastName' subscript="Last Name" /> 
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <label>
                    Email Id
                    <TextControl type="text" valid={this.state.validity.email} onBlur={this.updateStateEvent} name='email' /> 
                </label>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <label>
                        Phone Number
                        <TextControl type="text" valid={this.state.validity.phoneNumber} onBlur={this.updateStateEvent} name='phoneNumber'/> 
                    </label>
                </div>
            </div>

            <div className="row">
               <span className="col-md-4"> <input type="button" className='btn btn-primary' type="submit" value="Submit"  onClick={this.handleSubmit}/></span>
               <span className="col-md-4"><input type="button" className='btn btn-primary' value="Reset" /></span>
               <span className="col-md-4">
                {
                    this.props.children
                }
               </span>
            </div>
        </div>
    )
    }
}

export default SignUpForm;