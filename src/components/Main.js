import React, { Component } from "react";

import "../components/Main.css";

import Form from "./Form";
import Tarefas from "./Tarefas";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
      this.setState({
        tarefas: JSON.parse(tarefas),
      });
    }
    this.setState({
      tarefas: JSON.parse(tarefas),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (prevState.tarefas !== tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { tarefas, index, novaTarefa } = this.state;

    if (novaTarefa.trim() === "") {
      alert("Digite uma tarefa");
      return;
    }

    if (tarefas.includes(novaTarefa.toLowerCase()) && index === -1) {
      alert("Essa tarefa já existe");
      return;
    }

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa.toLowerCase()],
        novaTarefa: "",
      });
    } else {
      novasTarefas[index] = novaTarefa.toLowerCase();
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];

    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        <Tarefas
          tarefas={tarefas}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          novaTarefa={novaTarefa}
          index={this.state.index}
        />
      </div>
    );
  }
}
