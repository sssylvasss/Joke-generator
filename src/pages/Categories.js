// - https://api.chucknorris.io/jokes/categories
// - https://api.chucknorris.io/jokes/random?category={category}
// - https://api.chucknorris.io/jokes/search?query={query}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

///List all categories

export const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('https://api.chucknorris.io/jokes/categories')
			.then((res) => res.json())
			.then((json) => setCategories(json));
	}, []);

	return (
		<Main>
			<Text>Or pick a category</Text>
			<Wrapper>
				{categories.map((category) => (
					<TextCell key={category}>
						<Link to={`/category/${category}`}>
							<CategoryText>{category}</CategoryText>
						</Link>
					</TextCell>
				))}
			</Wrapper>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	padding: 0 30px 40px 30px;
	flex-direction: column;
	height: 400px;
	@media (min-width: 768px) {
		height: 400px;
		padding: 0 50px 50px 50px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const CategoryText = styled.h3`
	font-size: 18px;
	padding: 0 5px 0 5px;
	font-family: 'Permanent Marker', cursive;
`;

const Text = styled.h3`
	font-size: 18px;
	margi-bottom: 20px;
	font-family: 'Permanent Marker', cursive;
	@media (min-width: 768px) {
		font-size: 30px;
	}
`;

const TextCell = styled.div``;
