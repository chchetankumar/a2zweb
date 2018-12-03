import React from 'react';
import { Modal } from 'react-bootstrap';
import AddressForm from './forms/address-form';


export default class addAddressButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            addNewAddress: false,
        }
        this.showNewAddressFrom = this.showAddNewAddress.bind(this);
    }

    showAddNewAddress() {
        this.setState({
            addNewAddress: true,
        });
    }

    handleClose() {
        this.setState({
            addNewAddress: false,
        });
    }
    
    render() {
         return (<div className="add-address-btn">
            <button class="btn btn-primary" onClick={ this.showNewAddressFrom } > Add New Address </button>
            <Modal show={ this.state.addNewAddress } onHide={this.handleClose.bind(this)} >
                <Modal.Header closeButton>
                    <Modal.Title> 
                        Add a New Address
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddressForm />
                </Modal.Body>
            </Modal>
    </div> );
    }
}