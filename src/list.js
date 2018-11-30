import React, {Component} from 'react';
import Emp from './emp.js';
class List extends Component{
	
	
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
		const copyemps = Object.assign([], this.state3.emps);
		copyemps.splice(index, 1);
		this.setState({emps: copyemps});
	}
	
	
	render(){
		return(
			<div>
    		<table >
    			<tbody>
    				{
    					this.state3.emps.map((emp, id) => {
    						return (<Emp salary={emp.salary} 
										key = {emp.id}
										deleteEvent={this.delEmp.bind(this, id)}>
									{emp.name}
    							</Emp>)	
    					})
    				}
    			</tbody>
    		</table>	
    		
    		</div>
		);
	}
}
export default List;
