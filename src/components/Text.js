import React from 'react';
import styled from 'styled-components';

export const Text = () => {
	return (
		<Main>
			<HeadLine>Hey Folks! It's Your Lucky Day!</HeadLine>
			<HeadLine>Chuck Norris is here to tell You a joke!</HeadLine>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 100%;
	margin-top: 30px;
	@media (min-width: 768px) {
		padding: 30px 70px 30px 70px;
	}
	@media (min-width: 1200px) {
		padding: 60px 100px 50px 100px;
	}
`;

const HeadLine = styled.h1`
	padding: 0 30px 0 30px;
	margin: 3px;
	font-size: 25px;
	@media (min-width: 768px) {
		font-size: 30px;
	}
`;
