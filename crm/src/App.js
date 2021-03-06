import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';
import axios from 'axios'
import Home from './components/Home';
class App extends Component {
  constructor(){
    super()
    this.state= {
      data : []
    }
  }

  // DO NOT UNCOMMENT
  // // // async postAllData(){
  // // //   await axios.post("http://localhost:8000/person")
  // // // }

  async getAllClients () {
    let response = await axios.get("http://localhost:8000/clients")
    await this.setState({data : response.data})
  }

   async componentDidMount(){
    await this.getAllClients()

    // +++ for manual input +++
  //   // await setTimeout(() => {
  //   //   let data = require('./data.json')
  //   //   this.setState({data: data})
  //   // }, 100)

  // +++ for saving the Data to DB +++
  //  //await this.postAllData()
}

  updateClient = async (newData) => {
    await axios.put("http://localhost:8000/updatePerson", newData)
  }

  render(){
    return (
      <Router>
      <Navbar />
      <div className="App">
  
      {/* Routes below */}
      <Route path="/" exact render={() => <Home />}/>
      <Route path="/clients" exact render={() => <Clients data={this.state.data} updateClient={this.updateClient}/>}/>
      <Route path="/actions" exact render={() => <Actions />}/>
      <Route path="/analytics" exact render={() => <Analytics />}/>
  
      </div>
      </Router>
    );
  }
}

export default App;
