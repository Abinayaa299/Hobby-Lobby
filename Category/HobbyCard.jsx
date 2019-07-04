import React  from 'react';
import {Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class HobbyCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {spans : 0, name : this.props.name};
		this.imageRef = React.createRef();
		console.log(this.props.photo);
	}
	setSpans = () => {
		const h = this.imageRef.current.clientHeight;
		const span = Math.ceil(h/10);
		//console.log(span);
		this.setState({spans : span});
	}

	clickedEvent(name){
		console.log(name);
	}

	render() {
		//console.log(JSON.stringify(this.props));
		return (
			<Link to = {
					{
						pathname: "/:" + this.props.name,
						param : "Hello"
					}
				}	
			>
			<div style = {{gridRowEnd : `span ${this.state.spans}` }}  >
				<img
				src = {this.props.photo}
				title = {this.props.name} 
				alt = "image"
				 />
				 <Header as = "h4" style = {{color: "white" }}>{this.props.name}</Header>
			</div>
			 </Link>
		);
		
	}
}

export default HobbyCard;

