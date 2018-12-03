import React from 'react';
import TextControl from '../elements/form-input-text';


export default class registerProduct extends React.Component {
    constructor(props){
        super(props);
        this.state={
            validity: {}
        };
    }

    render() {
        return (
            <div class="form add-product">
                    <div class="row">
                        <label>
                            Product Name:
                            <TextControl type="text" onBlur={ this.updateState } name='productName' valid={this.state.validity.productName} error="Product Name should contain only Letters and start with Capital letters" /> 
                        </label>
                    </div>
                    <div class="row">
                        <label>
                            Product Description:
                            <textarea onBlur={ this.updateState } name='productDesc'  /> 
                        </label>
                    </div>
                    <div class="row">
                        <label>
                            Category:
                            <TextControl onBlur={ this.updateState } name='category'  /> 
                        </label>
                    </div>
                    <div class="row">
                        <input type="file" value="Choose the files" onClick={this.uploadImage}/>

                    </div>
                    
            </div>
        );
    }
}