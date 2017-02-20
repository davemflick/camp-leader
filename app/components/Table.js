import React from 'react';
import FccUsers from '../utils/FccUsers'

export default class Table extends React.Component {

	render () {

		return (
		<div>
			<table  className="col-xs-12 table">
			 <tbody>
			  <tr id='titleColumns'>
			   <th scope='column' className='col-xs-2'>Rank</th>
			   <th scope='column' className='col-xs-4'>Camper</th>
			   <th scope='column' className='col-xs-3'>Last 30 Days</th>
			   <th scope='column' className='col-xs-3'>Cumulative Points </th>
			  </tr>
			 </tbody>
			</table>
			<FccUsers />
		</div>
		)
	}
}

