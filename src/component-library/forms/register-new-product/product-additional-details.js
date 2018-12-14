import React from 'react';
import TextControl from '../../elements/form-input-text';
import FormGenerator from './form-generator';
import Select from '../../elements/form-input-select';
import Button from '../../elements/form-input-button';
import { updateStateEvent, updateStateOption } from '../form-update-state';
import { Units } from '../../../utils/utilities';
import axios from 'axios';


export default class ProductAdditionalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.submitDetails = this.submitDetails.bind(this);
    }
    
    componentWillMount() {
        axios.get('http://localhost:8888/list/spec-fields?type='+this.props.category)
             .then( function(data) {
                this.setState({ fields: data.fields})
        });
    }

    getInitialState() {
        return {
            'product_id': this.props.product,
            'additionalFields': {},
            'quantity':'',
            'price':'',
            'units':'',
            'fields':[],
            'validity': {
                'quantity':true,
                'price': true,
                'units': true
            }
        };
    }

    submitDetails() {
        this.props.next();
    }
    render() {
        return(<>
            <div className="row">
                <FormGenerator productSpecs={this.state.additionalFields} fields={this.state.fields}></FormGenerator>
            </div>
            <div className="row">
                <label> 
                    Quantity/Unit 
                    <TextControl type="text" onBlur={ this.updateStateEvent } name='quantity' valid={this.state.validity.quantity} error="Quatity can have only numeric value" /> 
                    <Select name="unit" data={Units} onChange={this.updateStateOption} /> 
                </label>
                
                <label>
                    Price in (Rs)
                    <TextControl type="text" onBlur={ this.updateStateEvent } name='price' valid={this.state.validity.price} error="Price can only be numbers and can have 1 decimal" /> 
                </label>
            </div>

            <div className="row">
                <div className="d-inline">
                <label>
                    Number of Units Available
                    <TextControl type="text" onBlur={ this.updateStateEvent } name='units' valid={this.state.validity.units} error="Units can have only numeric value" /> 
                </label>
                </div>
            </div>
            <div className="row">
                <input type="button" value="Go Back" className="btn btn-primary" onClick={this.props.prev}></input>
                <input type="button" className="btn btn-primary" value="Add Details" onClick={this.submitDetails}></input>
            </div>
            </>);
    }
};