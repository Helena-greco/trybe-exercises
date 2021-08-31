import './App.css';
import TaskList from './component'
import Image from './Image';

function App() {
  return (
    <div>
      <Image source="https://www.homemmaquina.com.br/wp-content/uploads/2021/01/3235815-1536x1024.jpg" alternativeText="Pessoa sentada no calendário" height="400px" width="500px" />
      <TaskList />
    </div>
  );
}

export default App;
