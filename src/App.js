import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { Categories } from './pages/Categories';
import { RandomJokes } from './pages/RandomJokes';
import { Search } from './pages/Search';
import { InputField } from './components/InputField';

export const App = () => {
	return (
		<BrowserRouter>
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
	);
};
