import React, {Component} from 'react';


class SecondDisplayComponent extends Component {


	render() {
		let activateLasers = function(){
			console.log("pew!")
		}
	    return (
			
			<div className="component">
				<h3>I'm a second component</h3>
				<button onClick={activateLasers}>
				  Activate Lasers
				</button>
			</div>
			
		);
	}
	
}
export default SecondDisplayComponent;
