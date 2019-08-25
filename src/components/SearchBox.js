import React from 'react';

const SearchBox = ({searchChange}) => {
	return (

		<div className=" tc pa2">
		<input 
		type='search' 
		className="pa2 b--green-10 ba bg-lightest-blue br2"
		 placeholder='Search Robots.'
		 onChange= {searchChange}
		 />
		</div>
		);
}


export default SearchBox;