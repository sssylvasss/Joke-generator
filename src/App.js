import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Categories } from './pages/Categories';
import { RandomJokes } from './pages/RandomJokes';
import { Search } from './pages/Search';
import { InputField } from './components/InputField';
import { Image } from './components/Image';
import { Text } from './components/Text';

export const App = () => {
	return (
		<Main>
			<BrowserRouter>
				<Route path='/' exact>
					<Text />
				</Route>

				<Image />
				<InputField />
				<Switch>
					<Route path='/' exact>
						<Categories />
					</Route>
					<Route path='/category/:category'>
						<RandomJokes />
					</Route>
					<Route path='/search/:searchValue'>
						<Search />
					</Route>
				</Switch>
			</BrowserRouter>
		</Main>
	);
};

const Main = styled.div`
	max-width: 2000px;
	border: solid 2px #000;
	margin: 0 auto;
	background: radial-gradient(
		circle,
		rgba(234, 255, 4, 1) 0%,
		rgba(0, 255, 250, 1) 35%,
		rgba(255, 0, 243, 1) 100%
	);
`;

// @media (min-width: 768px) {
// 	padding: 30px 30px 40px 30px;
// }
// @media (min-width: 1200px) {
// 	padding-bottom: 50px;
// }
