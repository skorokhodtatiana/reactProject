import React from 'react';

import styles from './Counter.module.scss';
import Input from '../Input';

const MIN = 1;
const STEP = 1;

const Counter = ({
	count,
	value: valueProp,
}) => {
	const [valueState, setValueState] = React.useState(count || MIN);
	const value = typeof valueProp != 'undefined' ? valueProp : valueState;

	const handleChange = (val) => {
		setValueState(val.target.value);
	};

	// const handlePlus = () => {
	// 	setValueInput(Number(valueInput) + 1);
	// };

	// const handleMinus = () => {
	// 	setValueInput(Number(valueInput) - 1);
	// 	setValueState(val);
	// };

	const handlePlus = () => {
		setValueState(Number(value) + STEP);
	};

	const handleMinus = () => {
		setValueState(Number(value) - STEP);
	};

	return (
		<>
		<div className={ styles.block }>
			<button onClick={ handlePlus } className={ styles.button }>+</button>
			<Input
				className={ styles.input }
				value={ valueState }
				onChange={ handleChange }
			/>
			<button onClick={ handleMinus } className={ styles.button }>-</button>
		</div>
		</>
	)
};

export default Counter;
