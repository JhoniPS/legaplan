import styles from './modalTarefas.module.scss';

export default function ModalDeletarTarefa({ isOpen, onClose, onDelete }) {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2>Deletar Tarefa</h2>
                <p className={styles.paragrafo}>Tem certeza que deseja excluir esta tarefa?</p>
                <div className={styles.container_button}>
                    <button onClick={onClose} className={styles.button_cancel_tarefa}>Cancelar</button>
                    <button onClick={onDelete} className={styles.button_delete_tarefa}>Excluir</button>
                </div>
            </div>
        </div>
    );
}