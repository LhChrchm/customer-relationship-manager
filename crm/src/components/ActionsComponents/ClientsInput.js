import React, { Component } from 'react';

class ClientsInput extends Component {
    constructor() {
        super()
        this.state = {
            client: {
                name: "",
                id: "",
            }
        }
    }
    sendClient = () => {
        this.props.getClientToUpdate(this.state.client)
    }

    handleChange = (e) => {
        let name = e.target.value
        let key = this.props.clients.filter(c => c.name === name).map(c => c._id)[0]
        let client = { ...this.state.client }
        client.name = name
        client.id = key
        this.setState({ client: client }, () => {
            if (key !== undefined) {
                this.sendClient()
                this.props.showUpdate(true)
            } else {
                this.props.showUpdate(false)
            }
        })
    }
    render() {
        return (
            <div className="actionsUpdateContainer">
                <div className="clientToUpdate">
                    Client to update:
                </div>
                <div className="middleColumn">
                    <input type="text" placeholder="Client Name" list="data" onChange={this.handleChange} />
                    <datalist id="data">
                        {this.props.clients.map(c => <option value={c.name} key={c._id} />)}
                    </datalist>
                </div>
            </div>
        );
    }
}

export default ClientsInput;