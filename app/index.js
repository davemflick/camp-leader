import React from 'react';
import { render } from 'react-dom';
import TableContainer from './components/TableContainer';
import Header from './components/Header';
import styles from "!style-loader!css-loader!sass-loader!./styles/main.css";
import fccUsers from './utils/fccUsers';


class App extends React.Component {
	render () {
		return (
			<div>
			 <Header />
			 <TableContainer />
			 <fccUsers />
			</div>
		)
	}
}

render(<App />, document.getElementById('start'));