import React from 'react';
import FccUsers from '../utils/FccUsers';
import Alltime from '../utils/Alltime';

export default class Table extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			recent: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			recent: !this.state.recent
		});
 	}


	render () {
		const current = {
			color: 'blue'
		}
		
		return (
		<div>
			<button type='button' className='col-xs-12 btn btn-default' onClick={this.handleClick}>Toggle List</button>
			<table  className="col-xs-12 table">
			 <tbody>
			  <tr id='titleColumns'>
			   <th scope='column' className='col-xs-2'>Rank</th>
			   <th scope='column' className='col-xs-4'>Camper</th>
			   <th scope='column' className='col-xs-3' style={this.state.recent === true ? current : null}>Last 30 Days</th>
			   <th scope='column' className='col-xs-3' style={this.state.recent === false ? current : null}>Cumulative Points </th>
			  </tr>
			 </tbody>
			</table>
			{this.state.recent === true ? <FccUsers /> : <Alltime />}
		</div>
		)
	}
}

