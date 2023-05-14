import styles from './Counter.module.scss';

const Counter = ({

}) => {
	const count = 1;
	return (
		<>
		<div className={ styles.block }>
			<button className={ styles.button }>+</button>
			<div className={ styles.count }>{ count }</div>
			<button className={ styles.button }>-</button>
		</div>
		</>
	)
};

export default Counter;
