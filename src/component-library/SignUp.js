import React from 'react';
import TextControl from './form-input-text';
import AZButton from './form-input-button';
import { validators } from '../utils/utilities';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.valid= true;
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

    updateState(e) {   
        const val = e.currentTarget.value; 
        let name = e.currentTarget.name;       
        if (this.state[name] != val || !this.state[name].length) {
            const reg = this.validators.hasOwnProperty(name)? new RegExp(validators[this.validators[name]]):null;
            let state = {
                [name]: val
            };
            state.validity =this.state.validity;
            if ( reg && !reg.test(val)) {
                state.validity[name] = false;
            } else {
                state.validity[name] = true;
            }
            this.setState(state);
        }
    }

    handleSubmit() {

        console.log(this.state);    
    }
   
    render() {
    return(
        <div className="sign-up">
            <div className="row">
                <div className="col-md-2">
                    Name:
                </div>
                <div className="col-md-10">
                    <TextControl type="text" onBlur={ this.updateState } name='firstName' valid={this.state.validity.firstName}  subscript="First Name"/> 
                    <TextControl type="text"  valid={this.state.validity.middleName} onBlur={ this.updateState } name='middleName' subscript="Middle Name"/> 
                    <TextControl type="text"  valid={this.state.validity.lastName} onBlur={ this.updateState } name='lastName' subscript="Last Name" /> 
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    Email Id
                </div>
                <div className="col-md-10">
                    <TextControl type="text" valid={this.state.validity.email} onBlur={this.updateState} name='email' /> 
                </div>  
            </div>

            <div className="row">
                <div className="col-md-2">
                    Phone Number
                </div>
                <div className="col-md-10">
                    <TextControl type="text" valid={this.state.validity.phoneNumber} onBlur={this.updateState} name='phoneNumber'/> 
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
            <div className="alert alert-danger">
                { this.state.errors }
            </div>
        </div>
    )
    }
}

export default SignUpForm;