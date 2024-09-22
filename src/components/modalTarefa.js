import styles from './modalTarefas.module.scss';

export default function ModalTarefa({ isOpen, onClose, tarefa, setTarefa, tarefas, setTarefas }) {
    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTarefa({
            [name]: value
        });
    };

    const submit = (e) => {
        e.preventDefault();

        const novasTarefas = [...tarefas, tarefa];
        setTarefas(novasTarefas);

        localStorage.setItem('tarefas', JSON.stringify(novasTarefas));

        setTarefa({
            title: "",
            checked: false
        });

        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2>Nova Tarefa</h2>

                <form onSubmit={submit} className={styles.form_add}>
                    <label>Título</label>
                    <input
                        type="text"
                        name="title"
                        value={tarefa.title}
                        onChange={handleChange}
                        placeholder="Digite"
                        className={styles.input}
                    />

                    <div className={styles.container_button}>
                        <button className={styles.button_cancel_tarefa} type="button" onClick={onClose}>Cancelar</button>
                        <button className="button_add_tarefa" type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}