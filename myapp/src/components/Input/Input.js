import PropTypes from 'prop-types';
// import cn from 'classname';

import styles from './Input.module.scss';

const TInput = {
	className: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string
};

const Input = ({
	className,
	id,
	value,
	type,
}) => {
	return (
		<div className={ className }>
			<label for='id'></label>
			<input
				id={ id }
				value={ value }
				type={ type }
			></input>
		</div>
	)
};

Input.propTypes = TInput;

export default Input
