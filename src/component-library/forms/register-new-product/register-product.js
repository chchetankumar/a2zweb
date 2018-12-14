import React from 'react';
import TextControl from '../../elements/form-input-text';
import Select from '../../elements/form-input-select';
import Button from '../../elements/form-input-button';
import { updateStateEvent, updateStateOption } from '../form-update-state';
import axios from 'axios';


export default class RegisterProduct extends React.Component {
    constructor(props){
        super(props);
        this.state= this.getInitialState();
        this.validators={
            productName: 'not-null',
            brand: 'not-null'
        };
        this.updateStateEvent= updateStateEvent.bind(this);
        this.updateStateOption= updateStateOption.bind(this);
        this.registerProduct = this.registerProduct.bind(this);
    }

    getInitialState() {
        return {
            'productName': '',
            'productDesc': '',
            'category':'',
            'validity': {
                'productName':true,
                'productDesc': true ,
                'brand': true, 
            }
        };
    }

    registerProduct(event) {
        
        this.props.next();
    }

    render() {
       return (
            <div className="form add-product">
                <div className="row">
                    <label>
                        Product Name:
                        <TextControl type="text" onBlur={ this.updateStateEvent } name='productName' valid={this.state.validity.productName} error="Product Name should contain only Letters and start with Capital letters" /> 
                    </label>
                </div>
                <div className="row">
                    <label>
                        Product Description:
                        <textarea onBlur={ this.updateStateEvent } name='productDesc'  /> 
                    </label>
                </div>
                <div className="row">
                    <label>
                        Category:
                        <Select name='category' ajax="http://localhost:8888/list/categories" onChange={this.updateStateOption} /> 
                    </label>
                </div>
                <div className="row">
                    <label>
                        Brand:
                        <Select name="brand" ajax="http://localhost:8888/list/brands" onChange={this.updateStateOption} /> 
                    </label>
                    <label>
                        Could Not find Your Brand? 
                        <TextControl type="text" onBlur={ this.updateStateEvent } name='brand' valid={this.state.validity.brand} error="Brand Name should contain only Letters and start with Capital letters" /> 
                        <Button value="Create a New Brand" onClick={this.createBrand}></Button>
                    </label>
                </div>
                <div className="row">
                    <input type="button" className="btn btn-primary" value="Register this Product" onClick={this.registerProduct}></input>
                </div>
            </div>
        );
    }
}
