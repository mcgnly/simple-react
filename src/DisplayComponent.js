import React from 'react';

export default ()=>{
	
	return(
		<div className="component">
			<h3>I'm a component</h3>
			<form action="">
				<input name="uploadedfile" type="file" />
				<input type="submit" value="Upload File" />
			</form>
		</div>
	);
	
}