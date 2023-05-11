import React from 'react';
import Async from 'react-select/async';
import styles from './Autocompliter.module.scss';

const AsyncSelect = ({ defaultOptionValue,loadOptions, onChange, value, isClearable, ...props }) => {

	return (
		<Async
			className="react-select-container"
			classNamePrefix="react-select"
			loadOptions={ loadOptions }
			defaultOptions
			value={ value }
			onChange={ onChange }
			isClearable={ isClearable }
		/>
	);
};

export default AsyncSelect;
