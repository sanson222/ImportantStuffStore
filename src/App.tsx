import React, { Component } from 'react';
import Drawer from './components/Drawer/Drawer';
// import 'materialize-css/dist/css/materialize.min.css'
// import 'bulma';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Drawer/>
      </div>
    );
  }
}

export default App;
