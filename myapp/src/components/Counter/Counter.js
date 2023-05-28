import React from 'react';

import styles from './Counter.module.scss';
import Input from '../Input';

const MIN = 1;
const STEP = 1;

const Counter = ({
	count,
	value: valueProp,
	min = MIN,
	step = STEP,
}) => {
	const [valueState, setValueState] = React.useState(count || MIN);
	const value = typeof valueProp != 'undefined' ? valueProp : valueState;

	const handleChange = (val) => {
		setValueState(val.target.value);
	};

	const handlePlus = () => {
		setValueState(Number(value) + step);
	};

	const handleMinus = () => {
		setValueState(Number(value) - step);
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
			<button disabled={ min === value } onClick={ handleMinus } className={ styles.button }>-</button>
		</div>
		</>
	)
};

export default Counter;
