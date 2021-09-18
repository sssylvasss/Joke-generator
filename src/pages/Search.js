import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ReturnButton } from '../components/ReturnButton';

//Return all jokes that includes the searched value

export const Search = () => {
	const [find, setFind] = useState([]);
	const { searchValue } = useParams();

	useEffect(() => {
		fetch(`https://api.chucknorris.io/jokes/search?query=${searchValue}`)
			.then((res) => res.json())
			.then((json) => {
				setFind(json.result);
			});
	}, [searchValue]);

	return (
		<>
			<ReturnButton />
			{find.length === 0 ? (
				<h1>Sorry, no jokes for you. Try again!</h1>
			) : (
				<div>
					{find.map((item) => (
						<h1 key={item.id}>{item.value}</h1>
					))}
				</div>
			)}
		</>
	);
};
