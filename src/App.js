import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dev from './Dev.js'
import Wallet from './Wallet.js'
import Header from './Header.js'
import Payment from './Payment.js'
import Invoice from './Invoice.js'

class App extends Component {
  render(){
    return(
      <div class="container">
        <Header/>
        <Router>
          <Route path='/' exact={true}> <Dev/></Route>
          <Route path='/wallet'><Wallet/></Route>
          <Route path='/payment'><Payment/></Route>
          <Route path='/invoice'><Invoice/></Route>

        </Router>
                       
      </div>
    )
  }
};

export default App;

