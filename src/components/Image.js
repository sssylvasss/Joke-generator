import React from 'react';

import styled from 'styled-components';

export const Image = () => {
	return (
		<Main>
			<Picture
				src='https://media.gq.com/photos/5583008609f0bee56440d085/master/w_1600,c_limit/news-politics-blogs-death-race-chucknorris1450.jpg'
				alt='Chuck'
			/>
		</Main>
	);
};

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-direction: column;
	padding-top: 10px;
`;

const Picture = styled.img`
	width: 35%;
	border-radius: 50px;

	@media (min-width: 768px) {
		width: 20%;
	}
`;
