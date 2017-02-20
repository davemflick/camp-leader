import React from 'react';

const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
export default class Alltime extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			recent: true
		};
	}

 	componentDidMount(){
 		this.CamperList();
 	}


 	CamperList(){
	 fetch(allTimeUrl)
		.then((response)=>{
			return response.json()})
		.then( (data)=> {
			this.setState({
				list: data
			})
		})
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
 				<tr key={element.toString()} className='camperRow'>
 				<th className='col-xs-2' >{element}</th>
 				<td className='col-xs-4 camperRow' ><img src={pic[element-1]}/>
 				<a href={'https://www.freecodecamp.com/'+ camper[element-1]} target='_blank' >{camper[element-1]}</a></td>
 				<td className='col-xs-3' >{recent[element-1]}</td>
 				<td className='col-xs-3' >{alltime[element-1]}</td>
 				</tr>
 				)
 			})
 		return ranked
 	}

 	return (
 		<div>
 			<table className='col-xs-12 table'>
 			<tbody >
 			{RecentList()}			
 			</tbody>
 			</table>
 		</div>
 	)
}


}//End of export