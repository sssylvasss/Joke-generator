import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { JokesSearch } from './pages/JokesSearch';
import { JokesByCategory } from './pages/JokesByCategory';
import { StartPage } from './pages/StartPage';

export const App = () => {
	return (
		<Main>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact>
						<StartPage />
					</Route>
					<Route path='/category/:category'>
						<JokesByCategory />
					</Route>
					<Route path='/search/:searchValue'>
						<JokesSearch />
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
	height: 100%;
	min-height: 100vh;
	background: radial-gradient(
		circle,
		rgba(234, 255, 4, 1) 0%,
		rgba(0, 255, 250, 1) 35%,
		rgba(255, 0, 243, 1) 100%
	);
`;
