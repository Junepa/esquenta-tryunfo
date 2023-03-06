import './App.css';
import Form from './components/Form';
constructor() {
  this.states = { //o pai sempre recebe o estado inicial
    title: '',
    description: '',
    category: '',
    urgent: '',
    disabledButton: '',
    tasks: []
  }
  super()
}

function App() {
  return (
    <div className="App">
     <Form buttonText="Adicionar"/>
    </div>
  );
}

export default App;
