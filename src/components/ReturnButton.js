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
	display: flex;
	flex-direction: column;
	padding: 15px;
`;
