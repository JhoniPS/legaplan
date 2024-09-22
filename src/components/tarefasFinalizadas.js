import Image from "next/image";
import '../styles/globals.scss'

export default function TarefasFinalizadas({ tarefas, toggleChecked, openDeleteModal }) {
    return (
        <>
            <div className="lista_tarefas">
                <ul>
                    {tarefas
                        .map((tarefa, index) => (
                            tarefa.checked && (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={tarefa.checked}
                                            onChange={() => toggleChecked(index)}
                                        />
                                        <p className="crossed_text">{tarefa.title}</p>
                                    </label>
                                    <Image
                                        src="/Icon.png"
                                        alt="Logo do meu site"
                                        width={24}
                                        height={24}
                                        onClick={() => openDeleteModal(index)}
                                    />
                                </li>
                            )
                        ))}
                </ul>
            </div>
        </>
    );
}