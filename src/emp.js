import React from 'react'

const emp = (props)=> {
	return (
			<tr>
				<td>{props.children}</td>
				<td>{props.salary}</td>
				<td><button onClick={props.deleteEvent}>Delete</button></td>
			</tr>
	)
};
export default emp;
