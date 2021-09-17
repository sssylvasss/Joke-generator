import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Shows one random joke depending

export const RandomJokes = () => {
	const { category } = useParams();
	const [joke, setJoke] = useState({});

	useEffect(() => {
		fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
			.then((res) => res.json())
			.then((json) => {
				setJoke(json);
			});
	}, [category]);

	return (
		<div>
			<div>
				<img src={joke.icon_url} alt='Chuck' />
				<h1>{joke.value}</h1>
			</div>

			<h1>random</h1>
		</div>
	);
};
