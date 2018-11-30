import React,{Component} from 'react';
class Count extends Component{
	constructor(){
		super();
		this.state = {
			count: 0
		};
	}
	btnClick() {
		this.setState({
				count: this.state.count +1
		});
		alert("value increased by 1");
	}
	render() {
		return (
			<div>
    		<h2> Value : {this.state.count}</h2>
    		<br/>
    		<button onClick = {this.btnClick.bind(this)}>increase value </button>
    		<hr/>
    		</div>
    		
		);
	}
}
export default Count;
