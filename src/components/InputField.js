import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InputField = () => {
	const [searchValue, setSearchValue] = useState('');

	return (
		<Main>
			<InputCell
				placeholder='Start Typing!'
				type='search'
				min='3'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			></InputCell>
			{/* Hide search-botton until searchValue.length is 3 */}
			{searchValue.length >= 3 && (
				<Link to={`/search/${searchValue}`}>
					<Click type='submit'>Click Me!</Click>
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

const Click = styled.button`
	border: none;
	height: 50px;
	border-radius: 0;
	border: 3px solid #000;
	font-size: 16px;
	background: none;
	margin-left: 5px;
	cursor: pointer;
		&:hover {
	background: #fff; 
`;

const InputCell = styled.input`
	width: 200px;
	height: 50px;
	background: none;
	border: 3px solid #000;
	text-align: center;
	font-size: 16px;
	cursor: text;
	&:hover {
	background: #fff; 
`;
