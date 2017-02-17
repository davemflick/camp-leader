import React from 'react';

export default class Table extends React.Component {
	render () {
		return (
			 
			<table id='table' className="col-xs-12">
			 <tbody>
			  <tr id='titleColumns'>
			   <th scope='column' className='col-xs-2'>Rank</th>
			   <th scope='column' className='col-xs-4'>Camper</th>
			   <th scope='column' className='col-xs-3'>30 Day Point Total</th>
			   <th scope='column' className='col-xs-3'>Cumulative Points </th>
			  </tr>
			 </tbody>
			</table>
			
		)
	}
}

