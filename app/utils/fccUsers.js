import React from 'react';

export default class FccUsers extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			recent: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

		componentWillMount() {
		const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
		const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
		if(this.state.recent == true){
			return fetch(recentUrl)
			.then((response)=>{
			return response.json()})
		.then( (data)=> {
			this.setState({
				list: data
			});
		});
		} else {
			return fetch(allTimeUrl)
			.then((response)=>{
			return response.json()})
		.then( (data)=> {
			this.setState({
				list: data
			});
			console.log(this.state.recent)
		});
		}
	}

	componentDidUpdate() {
			const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
		const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
		if(this.state.recent == true){
			return fetch(recentUrl)
			.then((response)=>{
			return response.json()})
		.then( (data)=> {
			this.setState({
				list: data
			});
		});
		} else {
			return fetch(allTimeUrl)
			.then((response)=>{
			return response.json()})
		.then( (data)=> {
			this.setState({
				list: data
			});
		});
		}
	}
	

	handleClick() {
		this.setState({
			recent: !this.state.recent
		});
		console.log(this.state.recent)
    }


 render() {
 	// Loop through API Objects and put individual properties into their own arrays
 	const data = this.state.list;
 	const camper = data.map((obj) => obj.username);
 	const pic = data.map((obj) => obj.img);
 	const recent = data.map((obj) => obj.recent);
 	const alltime = data.map((obj) => obj.alltime);
 	const rank = data.map((obj) => data.indexOf(obj) + 1);


 	function RecentList(){
 		const ranked = rank.map((element)=> {
 				return(
 				<tr key={element.toString()}>
 				<th className='col-xs-2' >{element}</th>
 				<td className='col-xs-4' ><img src={pic[element-1]}/>{camper[element-1]}</td>
 				<td className='col-xs-3' >{recent[element-1]}</td>
 				<td className='col-xs-3' >{alltime[element-1]}</td>
 				</tr>
 				)
 			})
 		return ranked
 	}

 	return (
 		<div>
 			<button type='button' className='col-xs-12 btn btn-default' onClick={this.handleClick}>ToggleTitties </button>
 			<table className='col-xs-12 table'>
 			<tbody >
 			{RecentList()}			
 			</tbody>
 			</table>
 		</div>
 	)
}


}//End of export
