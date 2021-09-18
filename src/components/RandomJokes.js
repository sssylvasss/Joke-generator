import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ReturnButton } from './ReturnButton';

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
		<Main>
			<ReturnButton />
			<JokeSection>
				<Picture src={joke.icon_url} alt='Chuck' />
				<Text>- {joke.value}</Text>
			</JokeSection>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	flex-direction: column;
`;

const JokeSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Picture = styled.img`
	padding-left: 15px;
	width: 15%;
	@media (min-width: 768px) {
		width: 10%;
	}
`;

const Text = styled.h2`
	padding: 30px;
`;
