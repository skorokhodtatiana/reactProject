import styles from './Modal.module.scss';

const Modal = () => {
	return (
		<>
			<div className={ styles.container }>
				<div className={ styles.body }>
					<div className={ styles.close }></div>
				</div>
			</div>
		</>
	)
}

export default Modal;
