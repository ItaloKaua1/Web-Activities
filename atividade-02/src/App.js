import React from 'react';
import './App.css';
import FunctionContextA from './components/questao01/FunctionContextA'; // Remova as chaves para importar o componente padrão
import { Avo } from './components/questao02/componenteAvo';
import { Avo2 } from './components/questao03/ComponenteAvo';

function App() {
  return (
    <div className="App">
      <FunctionContextA />
      <Avo />
      <Avo2/>
    </div>
  );
}

export default App;
