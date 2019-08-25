import React, {Component} from 'react';
// import {robots} from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';




class App extends Component {//smart component


	constructor(){
		super();
		this.state= {
			robots : [ ],
			searchfield : ' '
		}
	}

	componentDidMount() {
        	fetch('https://jsonplaceholder.typicode.com/users')
        	.then(response=> response.json())
        	.then(users => this.setState({ robots: users}));
        }

	// componentDidMount()
	// {
	// 	console.log("Loaded");
	// 	this.setState({
	// 		robots: robots
	// 	})
	// }


	searchChange= (event) =>{ //this syntax avoids the referencing of this pointer to the app instead of input from which it is called.
		this.setState({searchfield: event.target.value});
		
	}


	render(){
		const filterRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		console.log(filterRobots);
		if(this.state.robots.length === 0)
		{
			return (<h1>Loading</h1>);
		}
		else
		{
			return (

				<div className="tc">
				<h1><div className="boxed grow ">ROBOFRIENDS</div></h1>
				<SearchBox searchChange= {this.searchChange}/>
				<Scroll>
				<CardList robots={filterRobots} />
				</Scroll>
				</div>
				);
		}
		
	}
	
}

export default App;