import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor() {
        super()
        this.state = {
            newClient: {
                firstName: "",
                surname: "",
                country: "",
                owner: "",
            }
        }
    }

    handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        let newClient = { ...this.state.newClient }
        newClient[name] = value
        this.setState({ newClient: newClient })
    }

    addClient = async () => {
        let newClient = this.state.newClient
        if (newClient.firstName.length === 0 || newClient.surname.length === 0) {
            alert("Please enter a name")
            return
        } else {
            let client = {
                name: newClient.firstName + " " + newClient.surname,
                country: newClient.country,
                owner: newClient.owner,
            }
            axios.post("http://localhost:8000/addNewClient", client).then((response) => {
                alert(client.name + " has been added to the database.")
                this.props.getAllClients()
            })
        }
    }


    render() {
        return (
            <div className="newUserInfos">
                <div>
                    <div>
                        First name:
                    </div>
                    <input type="text" name="firstName" onChange={this.handleInput} />
                </div>
                <div>
                    <div>
                        Surname:
                    </div>
                    <input type="text" name="surname" onChange={this.handleInput} />
                </div>
                <div>
                    <div>
                        Country:
                    </div>
                    <input type="text" name="country" onChange={this.handleInput} />
                </div>
                <div>
                    <div>
                        Owner:
                    </div>
                    <input type="text" name="owner" onChange={this.handleInput} />
                </div>
                <button className="updateButton" onClick={this.addClient}>Add New Client</button>
            </div>
        );
    }
}

export default Add;