import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './home';
import Count from './count';
import Text from './text';
import List from './list';

//import logo from './logo.svg';
//import './App.css';

class App extends Component {
	
  render() {
    return (
    	<Router>
    	<div>
    	  	<ul>
    	  		<li><Link to={'/'}>Home</Link></li>
    	  		<li><Link to={'/count'}>Count</Link></li>
    	  		<li><Link to={'/text'}>Text</Link></li>
    	  		<li><Link to={'/list'}>List</Link></li>
    	  	</ul>
    	  	<hr/>
    	  	<switch>
    	  		<Route exact path = '/' component = {Home}/>
    	  		<Route exact path = '/count' component = {Count}/>
    	  		<Route exact path = '/text' component = {Text}/>
    	  		<Route exact path = '/list' component = {List}/>
   			</switch>
		</div>
		</Router>

    /*  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/
    );
  }
}
	

export default App;
