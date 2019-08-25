import React from 'react';
const Card = (props) =>{
	return(
		<div className="tc grow dim dib bg-light-blue br3 pa1 ma2 shadow-5 bw2 b--black-10">
			<img alt='Robo1' src={`https://robohash.org/${props.id}?200x200`} />
			<div>
				<h2 className="f3">{props.name}</h2>
				<p className="f5">{props.email}</p>
			</div>

		</div>
		);
}

export default Card;