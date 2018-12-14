import React from 'react';
import axios from 'axios';
import TextControl from '../../elements/form-input-text';
import Select from '../../elements/form-input-select';
import { updateStateEvent, updateStateOption } from '../form-update-state';

export default class Form extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = this.props.productSpecs;
        
    }   

    render() {
        return ( <div className="form additional-fields">
                {
                    this.props.fields.map( function (field) {
                        if ( field.type == "text") {
                            return (<label> {field.name}
                                <TextControl name={field.name} type="text" onBlur={ this.updateStateEvent }></TextControl>
                                </label>)
                        } else if ( field.type == "select") {
                            return (<label> { field.name} 
                                <Select name={field.name} onChange={ this.updateStateOption }></Select>
                                </label>);
                        }
                    })
                }
        </div>);
    }
};