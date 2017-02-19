import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class FccUsers extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}



componentWillMount(){
	var url = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
	Request.get(url).then((data) => {
		var users = JSON.parse(data.text);
		for(var i=0; i<users.length; i++){
		this.setState({
			camper: users[i].username,
			rank : i + 1,
			pic: users[i].img,
			recent: users[i].recent,
			alltime: users[i].alltime,
		});
	  }
	});
}


render() {
var camper = this.state.camper;
var rank = this.state.rank;
var pic = this.state.pic;
var recent = this.state.recent;
var alltime = this.state.alltime;
	return (
		<tr>
		 <th className='col-xs-2'>{rank}</th>
		 <td className='col-xs-4'><img src={this.state.pic} />{camper}</td>
		 <td className='col-xs-3'>{recent}</td>
		 <td className='col-xs-3'>{alltime}</td>
		</tr>
		)
	}
}