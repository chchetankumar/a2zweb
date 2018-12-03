import React from 'react';

const LoginComponent = (props) => <div className="login-component">
    <div className="row">
        <label> Login Id:
            <input type="text" placeholder="Enter Login ID/Email ID"/>
        </label>
    </div>
    <div className="row">       
        <label> Password 
         <input type="password" placeholder="Enter Password"/>
         </label>
    </div>
    <div className="row">
        <span className="col-md-3" key="l_s5"> <input className="btn btn-primary" type="submit" value="Submit" /> </span>
        <span className="col-md-3" key="l_s6"> <input type="button" className="btn btn-primary" value="Reset" /> </span>
        { props.children }
    </div>      
</div>;

export default LoginComponent;
        
