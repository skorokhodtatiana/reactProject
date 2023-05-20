import React from 'react';

import styles from './Counter.module.scss';
import Input from '../Input';

const Counter = () => {
	const [valueInput, setValueInput] =React.useState('1');

	const handleChange = (val) => {
		setValueInput(val);
	};

	return (
		<>
		<div className={ styles.block }>
			<button className={ styles.button }>+</button>
			<Input
				value={ valueInput }
				onChange={ handleChange }
			/>
			<button className={ styles.button }>-</button>
		</div>
		</>
	)
};

export default Counter;
