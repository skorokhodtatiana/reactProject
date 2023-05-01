import styles from './Modal.module.scss';
import PropTypes from 'prop-types';

const Modal = ({
	className,
	showModal,
	setShowModal
}) => {
	return (
		<>
		{ showModal &&
			<div className={ styles.container }>
				<div className={ styles.body }>
					<div className={ styles.close }></div>
				</div>
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
