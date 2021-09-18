import React from 'react';

import styled from 'styled-components';

export const Image2 = () => {
	return (
		<Main>
			<Picture
				src='https://lh3.googleusercontent.com/proxy/3GoAZbJx6EUQxrWCRqJC8E-rRPbULo7N8TimKItbGGBBW6_NGI8iAGPIvxCvpD1ChQa3ZxvdZLQEtqfKDGldbzRyP5_alMraIw'
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
	width: 70%;
	margin-top: 15px;
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 20%;
	}
`;
