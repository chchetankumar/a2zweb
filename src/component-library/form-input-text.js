
import React from 'react';
import StyledComponents from 'styled-components';
import { extend } from '../utils/utilities';

const TextControl = (props) => {
    const newProps = {
        type:'text',
    };
    
    extend(newProps, [props]);
    delete newProps.valid;
    delete newProps.subscript;

    if (!props.valid) {
        return (<div className="input-holder">
                <div className="grid">
                    <input {...newProps} ></input>
                    { (props.subscript)?<span class="subscript"> { props.subscript} </span>: null}
                </div>
                <div className="alert alert-danger">
                    Check Your Input
                </div>
            </div>);
    } else {
        return (<div className="input-holder">
        <div className="grid">
            <input {...newProps} ></input>
            { (props.subscript)?<span className="subscript"> { props.subscript} </span>: null}
        </div>
        </div>);
    }
    
}

export default TextControl;