import React from 'react';
import styled from 'styled-components';

// Image that showes with jokes or error message

export const Image2 = () => {
	return (
		<Main>
			<Picture
				src='https://www.pngkey.com/png/full/110-1104326_do-you-think-you-can-master-chuck-norris.png'
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
	width: 40%;
	margin-top: 15px;
	border-radius: 50%;
	background: #fff;
	@media (min-width: 768px) {
		width: 15%;
	}
`;
