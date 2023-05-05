import React from 'react';
import Async from 'react-select/async';
import styles from './Autocompliter.module.scss';

const AsyncSelect = ({ defaultOptionValue,loadOptions, onChange, value, ...props }) => {

	return (
		<Async
			className={ styles.select }
			loadOptions={ loadOptions }
			defaultOptions
			value={ value }
			onChange={ onChange }
		/>
	);
};

export default AsyncSelect;
