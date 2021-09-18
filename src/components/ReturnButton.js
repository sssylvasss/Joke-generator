import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

export const ReturnButton = () => {
	return (
		<Main>
			<Link to='/'>
				<i class='fas fa-arrow-left'></i>
			</Link>
		</Main>
	);
};

const Main = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	padding: 15px;
	cursor: pointer;
`;
