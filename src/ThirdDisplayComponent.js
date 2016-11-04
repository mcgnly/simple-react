import React from 'react';

export default ({numberOfComponents})=>{
	
	return(
		<div className="component">
			<h3>I'm a third component</h3>
			<p>I have simple props passed in from the parent container</p>
			<p>The number of components in this app are:</p>
			<p>{`${numberOfComponents}`}</p>
		</div>
	);
	
}


