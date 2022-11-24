import React from 'react';
import s from './Paginated.module.css';

export default function Paginated ({videogamesPage, videogames, paginated}){
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(videogames/videogamesPage); i++){
		pageNumbers.push(i);
	}

	return (
		<>
			<ul className={s.paginated}>
				{pageNumbers.map(number => {
					return <li key={number} className={s.paginated__button}>
						<button onClick={() => paginated(number)}>{number}</button>
					</li>
				})}
			</ul>
		</>
	);
}