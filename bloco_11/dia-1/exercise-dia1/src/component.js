import React, { Component } from 'react';
import './App.css'

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar banho', 'Lanchar', 'Ir para o Trabalho', 'Estudar', 'Imporante: Beber Água'];

class TaskList extends Component {
  render() {
    return (
      <ol>{ tarefas.map((item) => Task(item)) }</ol>
    );
  }
}

export default TaskList;