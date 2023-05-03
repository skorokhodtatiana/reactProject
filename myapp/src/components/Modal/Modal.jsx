import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import listCitys from '../../assets/data';

import React from 'react';
import AsyncSelect from 'react-select/async';

const Modal = ({
	className,
	showModal,
	setShowModal
}) => {

	const [inputValue, setInputValue] = React.useState();

	const filterColors = (inputValue) => {
		return listCitys.filter(i =>
			i.label.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	const promiseOptions = inputValue =>
		new Promise(resolve => {
			setTimeout(() => {
				resolve(filterColors(inputValue));
		}, 1000);
	});

	const handleInputChange = (newValue) => {
		setInputValue(newValue);
	};

	return (
		<>
		{ showModal &&
			<div className={ styles.container }>
				<div className={ styles.body }>
					<div className={ styles.close }></div>
				</div>
				<AsyncSelect
					onChange={(e) => handleInputChange(e)}
					isMulti
					placeholder="введите город"
					cacheOptions
					defaultOptions
					value = {inputValue}
					loadOptions={promiseOptions}
				/>
			</div>
		}
		</>
	)
}

Modal.propTypes = {
	className: PropTypes.string,
	showModal: PropTypes.bool,
	setShowModal: PropTypes.func,
}

export default Modal;

const AsyncExample = ({ defaultOptionValue, ...props }) => {
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
		<AsyncSelect
			loadOptions={loadOptions}
			defaultOptions
			value={value}
			onChange={onChange}
		/>
	);
};

// export default AsyncExample;
