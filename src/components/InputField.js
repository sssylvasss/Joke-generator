import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InputField = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<Main>
			<input
				placeholder='Start Typing!'
				type='search'
				min='3'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			></input>
			{/* Hide search-botton until searchValue.length is 3 */}
			{searchValue.length >= 3 && (
				<Link to={`/search/${searchValue}`}>
					<button type='submit'>Click Me!</button>
				</Link>
			)}
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 40px 0 40px 0;
`;
