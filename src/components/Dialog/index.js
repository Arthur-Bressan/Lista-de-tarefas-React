import React from "react";
import "./Dialog.css";

export default function Dialog({
  show,
  novaTarefa,
  handleChange,
  handleCancel,
  handleSubmit,
}) {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="dialog">
        <h2 className="title">Editar Tarefa</h2>
        <form className="content" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Alterar Nome"
            value={novaTarefa}
            onChange={handleChange}
          />
          <div className="button">
            <button
              className="button-cancel"
              type="button"
              onClick={handleCancel}
            >
              Cancelar
            </button>
            <button className="button-confirm" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
