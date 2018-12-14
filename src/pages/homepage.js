import React from 'react';
import SignIn from '../component-library/SignIn';
import AddAddress from '../component-library/add-address';
import CreateProduct from '../component-library/create-product';
//import CreateProduct from '../component-library/forms/register-new-product/create-product-wizard';

export default () => {
    return <div className="header">
            <img src="/images/ATZ_LOGO.png"></img>
            <nav>
                <a href=''> Departments </a>
            </nav>
            <div className="customer-utilities">
                <SignIn />
                <AddAddress />

                <CreateProduct />
            </div>
            </div>;
};