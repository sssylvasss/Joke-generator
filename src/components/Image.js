import React from 'react';

import styled from 'styled-components';

export const Image = () => {
	return (
		<Main>
			<HeadLine>Hey Folks! It's Your Lucky Day!</HeadLine>
			<HeadLine>Chuck Norris is here to tell You a joke!</HeadLine>
			{/* <Picture
				src='https://media.gq.com/photos/5583008609f0bee56440d085/master/w_1600,c_limit/news-politics-blogs-death-race-chucknorris1450.jpg
'
			/> */}
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

const HeadLine = styled.h1`
	font-family: 'Permanent Marker', cursive;
	padding: 0 30px 0 30px;
	margin-top: 0;
`;

// const Picture = styled.img`
// 	width: 30%;
// 	border-radius: 50px;
// `;
