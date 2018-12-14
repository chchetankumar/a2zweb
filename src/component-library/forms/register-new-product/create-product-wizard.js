import React from 'react';
import RegisterProduct from './register-product';
import AdditionalDetails from './product-additional-details';
import UploadPics from './upload-product-pics';


export default class CreateProductWizard extends React.Component {


    constructor(props){
        super(props);

        this.state= {
            'product_id':'',
            'page': 1,
        }
        this.pageIncrement = this.pageIncrement.bind(this);
        this.pageDecrement = this.pageDecrement.bind(this);
    }
    
    pageIncrement() {
        this.setState({page: this.state.page+1});
    }

    pageDecrement() {
        this.setState({page: this.state.page-1});
    }

    render() {
        return (
            <div className="create-product">
                { (this.state.page == 1)?<RegisterProduct page={this.state.page} product_id={this.state.product_id} next={this.pageIncrement} prev={this.pageDecrement} />:null }
                { (this.state.page == 2)?<AdditionalDetails page={this.state.page} product_id={this.state.product_id} next={this.pageIncrement} prev={this.pageDecrement} />:null }
                { (this.state.page == 3)?<UploadPics page={this.state.page} product_id={this.state.product_id} next={this.pageIncrement} prev={this.pageDecrement} />:null }
            </div>
        )
    }
}