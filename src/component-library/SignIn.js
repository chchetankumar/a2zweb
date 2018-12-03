import React from 'react';
import { Modal } from 'react-bootstrap';
import LoginComponent from './forms/Login';
import SignUp from './forms/SignUp';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
                    showLoginScreen : false, 
                    showSignUpScreen : false
                };
        this.showSignUpScreen = this.showSignUpScreen.bind(this);
        this.showLoginScreen = this.showLoginScreen.bind(this);
    }
    showLoginScreen() {
        this.setState({ showLoginScreen : true,
            showSignUpScreen :false,
        });
    }

    showSignUpScreen() {
        this.setState({ showSignUpScreen :true,
            showLoginScreen :false
        });
    }
    handleClose() {
        this.setState({ showLoginScreen : false,
                        showSignUpScreen: false });
    }

    render() {
        
        return <>
            <a onClick={this.showLoginScreen} > SignIn</a>
            <Modal show={this.state.showLoginScreen|| this.state.showSignUpScreen} onHide={this.handleClose.bind(this)} >
            <Modal.Header closeButton>
                <Modal.Title> {
                    this.state.showLoginScreen ? `Login` : `SignUp` 
                }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { 
                this.state.showLoginScreen ? 
                    <React.Fragment>
                        <LoginComponent>
                            <span className="col-md-2">
                                <a onClick={this.showSignUpScreen}> SignUp </a>
                            </span>
                        </LoginComponent>
                    </React.Fragment>:
                    <React.Fragment>
                        <SignUp show={this.state.showSignUpScreen}>
                            <span className="col-md-2">
                                <a onClick={this.showLoginScreen}> SignIn </a>
                            </span>
                        </SignUp>
                    </React.Fragment>
                }               
            </Modal.Body>
            </Modal>
        </>;
    }
}

export default SignIn;