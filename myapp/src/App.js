import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
	const [showModal, setShowModal] = useState(true);

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div className="App">
			<Modal showModal={ showModal } handleClick={ closeModal }/>
		</div>
	);
}

export default App;
