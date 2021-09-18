import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ReturnButton } from './ReturnButton';

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
		<Main>
			<ReturnButton />
			{find.length === 0 ? (
				<Text>Sorry, no jokes for you. Try again!</Text>
			) : (
				<JokeList>
					{find.map((item) => (
						<Text key={item.id}>
							<i class='fas fa-hat-cowboy'></i>
							{item.value}
						</Text>
					))}
				</JokeList>
			)}
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	@media (min-width: 768px) {
		padding: 0 100px 100px 100px;
	}
`;

const Text = styled.h2``;

const JokeList = styled.div``;
