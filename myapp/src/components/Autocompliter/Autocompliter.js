import React from 'react';
import Async from 'react-select/async';

import styles from './Autocompliter.module.scss';

const AsyncSelect = ({ defaultOptionValue,listCitys, ...props }) => {
	const [value, setValue] = React.useState();
	const [defaultValue, setDefaultValue] = React.useState();

	React.useEffect(() => {
		setValue(defaultValue);
	}, [defaultValue]);

	const loadOptions = (searchKey) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				!defaultValue &&
			setDefaultValue(listCitys.find((o) => o.value === defaultOptionValue));
			const filtered = listCitys.filter((o) => o.label.includes(searchKey));

			resolve(filtered);
		}, 3000);
	});
	};

	const onChange = (option) => setValue(option);

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
