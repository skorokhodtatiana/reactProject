import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Cart = () => {
	const [showModal, setShowModal] = useState(true);

	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<>
			<div>
				<h1>Корзина</h1>
				<div>
					<Modal showModal={ showModal } handleClick={ closeModal }/>
				</div>
			</div>
		</>
	)
};

export default Cart;
