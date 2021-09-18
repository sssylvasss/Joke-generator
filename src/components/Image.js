import React from 'react';
import styled from 'styled-components';

// Image on home page

export const Image = () => {
	return (
		<Main>
			<Picture
				src='https://i.pinimg.com/564x/4c/42/0c/4c420cc6fa11f8645717e5decf30bdb5.jpg'
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
	width: 45%;
	border-radius: 50%;
	border: 4px solid #000;

	@media (min-width: 768px) {
		width: 20%;
	}
`;
