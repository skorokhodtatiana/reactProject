import PropTypes from 'prop-types';
// import cn from 'classname';

import styles from './Input.module.scss';

const TInput = {
	className: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	error: PropTypes.string,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};

const Input = ({
	className,
	id,
	value,
	type,
	disabled,
	placeholder,
	error,
	onChange,
	...restProps
}) => {
	const textError = error && (
		<div>{ error }</div>
	);
	return (
		<div className={ className }>
			<label for='id'></label>
			<input
				id={ id }
				value={ value }
				type={ type }
				disabled={ disabled }
				placeholder={ placeholder }
				onChange={ onChange }
				{ ...restProps }
			></input>
			{ textError }
		</div>
	)
};

Input.propTypes = TInput;

export default Input
