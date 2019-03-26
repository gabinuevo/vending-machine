import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import GabiChips from './GabiChips';
import SaraSweets from './SaraSweets';
import Cheeze from './Cheeze';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
            <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route exact path="/" render={() => <VendingMachine/>} />
                    <Route exact path="/chips" render={() => <GabiChips />} />
                    <Route exact path="/sweets" render={() => <SaraSweets />} />
                    <Route exact path="/cheeze" render={() => <Cheeze />} />
                </Switch>
            </BrowserRouter>

            {/* <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => <VendingMachine/>} />
                    <Route exact path="/chips" render={() => <GabiChips />} />
                    <Route exact path="/sweets" render={() => <SaraSweets />} />
                    <Route exact path="/cheeze" render={() => <Cheeze />} />
                </Switch>
            </BrowserRouter> */}


      </div>
    );
  }
}

export default App;
