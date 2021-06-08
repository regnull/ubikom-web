import React, {Component } from 'react';
import axios from "axios";
import { instanceOf } from 'prop-types';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            nameError : false,
            nameAvailable : true,
        };

        this.handleChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            });
        }
        this.keyPress = this.keyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleValidation(){
        let name = this.state.name;

        if(name.length >= 3)
            this.setState({'nameError' : false});
        else if(name.length > 0 && name.length <= 3)
            this.setState({'nameError' : true });
        else  if(name.length === 0)
            this.setState({'nameError' : false});

    }


    keyPress(){
        this.handleValidation();
        if(this.state.name.length >= 3)
        {
            const apiUrl = 'https://alpha.ubikom.cc:8088';
            var self = this;
            axios.get(apiUrl+'/lookupName',{
                params:{
                    name: this.state.name
                }
            })
                .then(function (response) {
                    // console.log(response.data.available);
                    self.setState({'nameAvailable': response.data.available})
                })
                .catch(function (error){
                    console.log(error);
                })
        }
    }

    handleSubmit(event){
        event.preventDefault();
    }

    handleNext(){
        this.props.history.push({
            pathname: '/password',
            state: {
                'name': this.state.name
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Ubikom Project</h1>
                <p><i>Encrypted email based on Self-Sovereign Identity</i></p>
                <h2></h2>
                <p>
                    Ubikom is free, open-source email framework based on the concept of <a href="https://sovrin.org/faq/what-is-self-sovereign-identity/">Self-Sovereign Identity.</a>
                    You own your identity (which, in this case, means your private key), and all the outgoing and incoming messages are encrypted 
                    and signed by default. 
                </p>
                <p>
                    Ubikom uses <a href="https://en.bitcoin.it/wiki/Secp256k1">secp256k1 Elliptic Curve Cryptography</a>, also used by 
                    Bitcoin.
                </p>
                <p>
                    It doesn't spy on you, because, well, you don't give away any private information, the only thing known
                    to others is your public key and your identifier (part of your email). Your messages cannot be decrypted by 
                    anyone but you.
                </p>
                <p>
                    To send and receive messages, you use any standard email client, such as Mozilla Thunderbird, iOS Mail, or any other 
                    client that supports SMTP and POP3. Encryption and decryption is done on the fly by the proxy (which you can also run if you like).
                </p>
                <p>
                    Eventually, the public key registry will be decentralized so that it's not controlled by any single party.
                </p>
                <p>
                    If you want to give it a try, you can start on this page by choosing your email identifier below.
                </p>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <p>Choose your email identifier</p>
                        <div className="col-sm-9 mb-10">
                            <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                    onKeyUp={this.keyPress}
                                    placeholder="identifier (i.e. bob)" />
                        </div>
                        <div className="col-sm-3 mb-10">
                            <button type="submit"
                                    className="btn btn-primary"
                                    onClick={this.handleNext.bind(this)}
                                    disabled={ (this.state.nameAvailable && this.state.name.length >= 3)  ? false : true }>
                                Next
                            </button>
                        </div>
                        <div className="col-sm-10">
                            {this.state.nameError ? <span className="text-danger">Name is too short.</span> : ''}  {'  '}
                            {!this.state.nameAvailable ? <span className="text-danger">This name is not available.</span> : ''}
                        </div>
                    </div>
                    </form>
                    <p>
                        If you like to learn more, read more detailed technical description <a href="example.com">here</a>.
                    </p>
                    <p>GitHub repo: <a href="https://github.com/regnull/ubikom">github.com/regnull/ubikom</a></p>
                    <p>Contact: <a href="mailto: lgx@ubikom.cc">lgx@ubikom.cc</a></p>
            </div>
        );
    }
}

export default NameForm;
