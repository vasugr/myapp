import React, { Component } from 'react';
import Emp from './emp.js';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			data: '',
			count: 0
		};
	}
	updateState(e){
		this.setState({data: e.target.value});
	}
	
	clearInput() {
		this.setState({data: ''});
		ReactDOM.findDOMNode(this.refs.mytext).focus();
	}
	
	btnClick1(){
		alert("button clicked!!!");
	}
	btnClick() {
		this.setState({
				count: this.state.count +1
		});
		alert("value increased by 1");
	}
	
	state3 = {
		emps: [
			{id:105,name: 'paulllll',salary:5},
			{id:104,name: 'paullll',salary:50},
			{id:103,name: 'paulll',salary:500},
			{id:102,name: 'paull',salary:5000},
			{id:101,name: 'paul',salary:50000},
		]
	}
	delEmp = (index,e)=>{
		const copyemps = Object.assign([], this.state.emps);
		copyemps.splice(index,1);
		this.setState({emps:copyemps});
	}
  render() {
    return (
    	<div>
    		<h1>Hello, {this.props.names}</h1>
    		<p1>Here is a button </p1><br/>
       		<button onClick = {this.btnClick1}>ok</button>
    		<hr/>
    		
    		
    		<h2> Value : {this.state.count}</h2>
    		<br/>
    		<button onClick = {this.btnClick.bind(this)}>increase value </button>
    		<hr/>
    		
    		<br/>		
    		<input type = "text" value = {this.state.data}
    		onChange = {this.updateState.bind(this)} ref = "mytext"/>
    		<h4>{this.state.data}</h4>
    		<button onClick = {this.clearInput.bind(this)}>CLEAR</button>
    		<hr/>
    		
    		<table >
    			<tbody>
    				{
    					this.state3.emps.map((emp) => {
    						return (<Emp salary={emp.salary} 
    							key = {emp.id}
    							deleteEvent={this.delEmp.bind(this, emp.id)}>
    							{emp.name}
    						</Emp>)
    					})
    				}
    			</tbody>
    		</table>
			
		</div>

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
