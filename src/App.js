import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Categories } from './pages/Categories';
import { RandomJokes } from './pages/RandomJokes';
import { Search } from './pages/Search';
import { InputField } from './components/InputField';
import { Image } from './components/Image';

export const App = () => {
	return (
		<Main>
			<BrowserRouter>
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
	background: radial-gradient(
		circle,
		rgba(234, 255, 4, 1) 0%,
		rgba(0, 255, 250, 1) 35%,
		rgba(255, 0, 243, 1) 100%
	);
`;
