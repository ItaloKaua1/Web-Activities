import React from 'react';
import './App.css';
import FunctionContextA from './components/questao01/FunctionContextA'; // Remova as chaves para importar o componente padrão
import { Avo } from './components/questao02/componenteAvo';

function App() {
  return (
    <div className="App">
      <FunctionContextA />
      <Avo />
    </div>
  );
}

export default App;
