import React from 'react';

import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import listCitys from '../../assets/data';
import AsyncExample from '../Autocompliter';

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
					<AsyncExample
						onChange={ (e) => handleInputChange(e) }
						isMulti
						listCitys={listCitys}
						placeholder="введите город"
						cacheOptions
						defaultOptions
						value = { inputValue }
						loadOptions={ promiseOptions }
					/>
				</div>
			}
		</>
	);
};

Modal.propTypes = {
	className: PropTypes.string,
	showModal: PropTypes.bool,
	setShowModal: PropTypes.func,
}


export default Modal;
