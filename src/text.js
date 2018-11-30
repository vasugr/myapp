import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Text extends Component{
constructor(){
		super();
		this.state = {
			data: '',
		};
	}
	updateState(e){
		this.setState({data: e.target.value});
	}
	
	clearInput() {
		this.setState({data: ''});
		ReactDOM.findDOMNode(this.refs.mytext).focus();
	}
	render(){
		return(
			<div>
    		
    		<br/>		
    		<input type = "text" value = {this.state.data}
    		onChange = {this.updateState.bind(this)} ref = "mytext"/>
    		<h4>{this.state.data}</h4>
    		<button onClick = {this.clearInput.bind(this)}>CLEAR</button>
    		<hr/>
    		
    		
    		</div>
		);
	}
}
export default Text;
