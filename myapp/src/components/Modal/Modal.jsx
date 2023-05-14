import React from 'react';

import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import listCitys from '../../assets/data';
import AsyncExample from '../Autocompliter';
import Counter from '../Counter';

const Modal = ({
	className,
	showModal,
	setShowModal,
	handleClick
}) => {

	const [inputValue, setInputValue] = React.useState('');

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
						<div onClick={ handleClick } className={ styles.close }></div>
						<AsyncExample
							onChange={ handleInputChange }
							listCitys={ listCitys }
							placeholder="Выберите город"
							cacheOptions
							defaultOptions
							value = { inputValue }
							loadOptions={ promiseOptions }
							isClearable
						/>
						<Counter/>
					</div>
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
