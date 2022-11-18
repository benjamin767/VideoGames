import React from 'react';

export default function Paginated ({videogamesPage, videogames, paginated}){
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(videogames/videogamesPage); i++){
		pageNumbers.push(i);
	}

	return (
		<>
			<ul>
				{pageNumbers.map(number => {
					return <li key={number}>
						<button onClick={() => paginated(number)}>{number}</button>
					</li>
				})}
			</ul>
		</>
	);
}