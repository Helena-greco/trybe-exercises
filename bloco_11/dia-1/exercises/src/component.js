import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar banho', 'Lanchar', 'Ir para o Trabalho', 'Estudar', 'Importante: Beber Água'];

class TaskList extends Component {
  render() {
    return (
      <ol>{ tarefas.map((item) => Task(item)) }</ol>
    );
  }
}

export default TaskList;