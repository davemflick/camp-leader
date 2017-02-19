import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class FccUsers extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			count: 1,
			sort: 'recent'
		};
	}

	componentDidMount() {
		fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
		.then((response)=>{
			return response.json()})
		.then( (data)=> {
			this.setState({
				list: data
			});
		});
	}

 render() {
 	const data = this.state.list
 
 	const camper = data.map((obj) => obj.username);
 	const pic = data.map((obj) => obj.img);
 	const recent = data.map((obj) => obj.recent);
 	const alltime = data.map((obj) => obj.alltime);
 	const rank = data.map((obj) => data.indexOf(obj) + 1);


 	return (
 			<tbody>
 			{rank.map((element)=> {
 				return(
 				<tr key={element.toString()}>
 				<th className='col-xs-2' >{element}</th>
 				<td className='col-xs-4' ><img src={pic[element-1]}/>{camper[element-1]}</td>
 				<td className='col-xs-3' >{recent[element-1]}</td>
 				<td className='col-xs-3' >{alltime[element-1]}</td>
 				</tr>
 				)
 			})}			
 			</tbody>
 	)
}



}//End of export
