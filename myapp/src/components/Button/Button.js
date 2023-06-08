import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const TButton = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	href: PropTypes.string,
	variant: PropTypes.oneOf(['second', 'success']),
	type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
	children: PropTypes.node,
};

const Button = ({
	className,
	variant,
	disabled,
	as,
	href,
	size,
	children,
	block,
	type = 'button',
	prefix = 'btn',
	...props
}) => {

	const classes = cn(className, {
		[`${variant}`]: variant,
		[`${size}`]: size,
		[`${block}`]: block,
	});

	return (
		<button className={ classes }
			disabled={ disabled }
			href={ href }
			type={ type }
			{...props}
		>
			{ children }
		</button>
	);
};

Button.propTypes = TButton;

export default Button;
