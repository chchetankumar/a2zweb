import React from 'react';
import SignIn from '../component-library/SignIn';
import AddAddress from '../component-library/add-address';
import RegisterProduct from '../component-library/forms/register-product';

export default () => {
    return <div className="header">
            <img src="/images/ATZ_LOGO.png"></img>
            <nav>
                <a href=''> Departments </a>
            </nav>
            <div className="customer-utilities">
                <SignIn />
                <AddAddress />

                <RegisterProduct />
            </div>
            </div>;
};