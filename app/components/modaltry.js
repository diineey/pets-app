import styles from './modal/modal.module.css'
const ModalTry = ({ isOpen, content, width }) => {
	if (!isOpen) return null;

	return (
		<dialog className={styles.modal}>
			<div className={styles.modalMainContainer} style={{width: `${width}`}}>
				{content}
			</div>
		</dialog>
	);
};

export default ModalTry;