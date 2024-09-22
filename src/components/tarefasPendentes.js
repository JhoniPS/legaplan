import Image from "next/image";

export default function TarefasPendentes({ tarefas, toggleChecked, openDeleteModal }) {

    return (
        <>
            <div className="lista_tarefas">
                <ul>
                    {tarefas
                        .map((tarefa, index) => (
                            !tarefa.checked && (
                                <li key={index}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={tarefa.checked}
                                            onChange={() => toggleChecked(index)}
                                        />
                                        <p>{tarefa.title}</p>
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