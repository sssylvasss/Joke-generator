import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ReturnButton } from '../components/ReturnButton';

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
`;
const JokeSection = styled.div`
	display: flex;

	align-items: center;
	justify-content: center;
`;

const Picture = styled.img`
	width: 20%;
`;

const Text = styled.h2`
	font-family: 'Permanent Marker', cursive;
	padding: 30px;
`;
