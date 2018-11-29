import React from 'react';
import RowLayout from '../layouts/row-layout';
import TextControl from './form-input-text';
import AZButton from './form-input-button';


const LoginComponent = (props) => <div className="login-component">
    <div className="row">
        <span className="col-md-4" key="l_s1"> Login </span>
        <span className="col-md-4" key="l_s2"> <input type="text" placeholder="Enter Login ID/Email ID"/> </span>
    </div>
    <div className="row">       
        <span className="col-md-4" key="l_s3"> Password </span>
        <span className="col-md-4" key="l_s4"> <input type="password" placeholder="Enter Password"/> </span>
    </div>
    <div>
        <span className="col-md-3" key="l_s5"> <input className="btn btn-primary" type="submit" value="Submit" /> </span>
        <span className="col-md-3" key="l_s6"> <input type="button" className="btn btn-primary" value="Reset" /> </span>
        { props.children }
    </div>      
</div>;

export default LoginComponent;
        
