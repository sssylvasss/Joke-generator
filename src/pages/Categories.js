// - https://api.chucknorris.io/jokes/categories
// - https://api.chucknorris.io/jokes/random?category={category}
// - https://api.chucknorris.io/jokes/search?query={query}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

///List all categories

export const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('https://api.chucknorris.io/jokes/categories')
			.then((res) => res.json())
			.then((json) => setCategories(json));
	}, []);

	return (
		<div>
			{categories.map((category) => (
				<div key={category}>
					<Link to={`/category/${category}`}>
						<h1>{category}</h1>
					</Link>
				</div>
			))}
		</div>
	);
};
