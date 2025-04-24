import React from "react";
import { FaPlus } from "react-icons/fa";

import "./Form.css";

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="#">
      <h1>Lista de Tarefas</h1>
      <span className="form">
        <input
          onChange={handleChange}
          type="text"
          value={novaTarefa}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">
          <FaPlus />
        </button>
      </span>
    </form>
  );
}
