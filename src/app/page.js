"use client"

import TarefasPendentes from "../components/tarefasPendentes";
import TarefasFinalizadas from "../components/tarefasFinalizadas";

import ModalDeletarTarefa from "../components/modalDeletarTarefa";
import ModalTarefa from "../components/modalTarefa";

import { useState, useEffect } from "react";


export default function Home() {
  const [tarefa, setTarefa] = useState({
    title: "",
    checked: false
  });

  const [tarefas, setTarefas] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);

  const isOpen = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  const openDeleteModal = (index) => {
    setTarefaSelecionada(index);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setTarefaSelecionada(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = () => {
    if (tarefaSelecionada !== null) {
      const novasTarefas = tarefas.filter((_, index) => index !== tarefaSelecionada);
      setTarefas(novasTarefas);
      localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
      closeDeleteModal();
    }
  };

  const toggleChecked = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].checked = !novasTarefas[index].checked;
    setTarefas(novasTarefas);
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
  };

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  return (
    <>
      <div className="container_main">
        <div className="container_tarefas">
          <p>Suas tarefas de hoje</p>
          <TarefasPendentes
            tarefas={tarefas}
            toggleChecked={toggleChecked}
            openDeleteModal={openDeleteModal}
          />

          <p>Tarefas Finalizadas</p>
          <TarefasFinalizadas
            tarefas={tarefas}
            toggleChecked={toggleChecked}
            openDeleteModal={openDeleteModal}
          />
        </div>

        <button className="button_add_tarefa" onClick={isOpen}>Adicionar nova tarefa</button>
      </div>

      <ModalTarefa
        isOpen={isModalOpen}
        onClose={onClose}
        tarefa={tarefa}
        setTarefa={setTarefa}
        tarefas={tarefas}
        setTarefas={setTarefas}
      />

      <ModalDeletarTarefa
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />
    </>
  );
}
