import React from 'react';
import styled from 'styled-components';

// Image that showes with jokes or error message

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
	align-items: center;
	justify-content: center;
	display: flex;
	padding: 15px;
`;

const Picture = styled.img`
	width: 70%;
	margin-top: 15px;
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 20%;
	}
`;
