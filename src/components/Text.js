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
`;

const HeadLine = styled.h1`
	font-family: 'Permanent Marker', cursive;
	padding: 0 30px 0 30px;
	margin: 0;
	font-size: 20px;
	@media (min-width: 768px) {
		font-size: 30px;
	}
`;
