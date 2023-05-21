import React from 'react';

import styles from './Counter.module.scss';
import Input from '../Input';

const Counter = ({
	count
}) => {
	const [valueInput, setValueInput] = React.useState(count);

	const handleChange = (val) => {
		setValueInput(val);
	};

	const handlePlus = () => {
		setValueInput(valueInput + 1);
	};

	const handleMinus = () => {
		setValueInput(valueInput - 1);
	};

	return (
		<>
		<div className={ styles.block }>
			<button onClick={ handlePlus } className={ styles.button }>+</button>
			<Input
			className={ styles.input }
				value={ valueInput }
				onChange={ handleChange }
			/>
			<button onClick={ handleMinus } className={ styles.button }>-</button>
		</div>
		</>
	)
};

export default Counter;
