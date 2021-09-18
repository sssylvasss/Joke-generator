import React from 'react';

import { RandomJokes } from '../components/RandomJokes';
import { Image2 } from '../components/Image2';
import { InputField } from '../components/InputField';

export const JokesByCategory = () => {
	return (
		<>
			<Image2 />
			<InputField />
			<RandomJokes />
		</>
	);
};
