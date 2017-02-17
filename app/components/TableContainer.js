import React from 'react';
import Table from './Table';

export default class TableContainer extends React.Component {
	render () {
		return (
			<div className='tableContainer'>
			  <div className='row'>
			  	<div className='col-xs-10 col-xs-offset-1' id="tableContain">
			  		<div id='tableChamps'>
			  		  <h3> Table of Champions!!!!</h3>
			  		</div>
			  		<Table />
			  	</div>
			  </div>
			</div>
		)
	}
}

