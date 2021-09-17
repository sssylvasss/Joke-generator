import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const InputField = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<div>
			<input
				placeholder='Search Joke'
				type='search'
				min='3'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			></input>
			{/* Hide search-botton until searchValue.length is 3 */}
			{searchValue.length >= 3 && (
				<Link to={`/search/${searchValue}`}>
					<button type='submit'>Search</button>
				</Link>
			)}
		</div>
	);
};
