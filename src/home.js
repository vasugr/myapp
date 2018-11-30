import React, {Component} from 'react';

class Home extends Component {
	btnClick1(){
		alert("button clicked!!!");
	}
	render() {
		return (
			<div>
				<h1>Hello, {this.props.names}</h1>
				<p1>Here is a button </p1><br/>
		   		<button onClick = {this.btnClick1}>ok</button>
				<hr/>
			</div>
		);
	}
}
export default Home;
