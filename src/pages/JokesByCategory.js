import React from 'react';
import { useParams } from 'react-router-dom';

import { RandomJokes } from '../components/RandomJokes';
import { Image2 } from '../components/Image2';
import { InputField } from '../components/InputField';

export const JokesByCategory = () => {
	//Reusable, moved the param here from the RandomJoke component to make the component reusable.
	const { category } = useParams();
	return (
		<>
			<Image2 />
			<InputField />
			<RandomJokes category={category} />
		</>
	);
};
