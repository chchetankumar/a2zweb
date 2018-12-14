import React from 'react';
import { Modal } from 'react-bootstrap';
import CreateProduct from './forms/register-new-product/create-product-wizard';


export default class createProductButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            createProduct: false,
        }
        this.createProduct = this.createProduct.bind(this);
    }

    createProduct() {
        this.setState({
            createProduct: true,
        });
    }

    handleClose() {
        this.setState({
            createProduct: false,
        });
    }
    
    render() {
         return (<div className="add-address-btn">
            <button class="btn btn-primary" onClick={ this.createProduct } > Create a New Product </button>
            <Modal show={ this.state.createProduct } onHide={this.handleClose.bind(this)} >
                <Modal.Header closeButton>
                    <Modal.Title> 
                        Create Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateProduct />
                </Modal.Body>
            </Modal>
    </div> );
    }
}