import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from "react";
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
               <Main />
      </div>
      </BrowserRouter>
    );
  }
}


export default App;

