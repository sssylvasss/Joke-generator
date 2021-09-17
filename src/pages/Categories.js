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
			<CategorySection>
				{categories.map((category) => (
					<CategoryTextSection key={category}>
						<Link to={`/category/${category}`}>
							<CategoryText>{category}</CategoryText>
						</Link>
					</CategoryTextSection>
				))}
			</CategorySection>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	flex-direction: column;
`;
const CategoryText = styled.h3`
	font-size: 18px;
	padding: 5px;
	font-family: 'Permanent Marker', cursive;
`;
const Text = styled.h3`
	font-size: 18px;
	padding: 5px;
	width: 100%;
	text-align: center;
	font-family: 'Permanent Marker', cursive;
`;
const CategoryTextSection = styled.div`
	display: flex;
	flex-direction: row;
`;
const CategorySection = styled.div`
	display: flex;
	flex-direction: row;
`;
