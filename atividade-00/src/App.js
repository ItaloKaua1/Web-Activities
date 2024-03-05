import './App.css';
import MeusDados from './components/MeusDados';
import MeusDadosArrowReturn from './components/MeusDadosArrowReturn';
import MeusDadosNoReturnNoClass from './components/MeusDadosNoReturnNoClass';

function App() {
  return (
    <div>
      <MeusDados/>
      <MeusDadosArrowReturn />
      <MeusDadosNoReturnNoClass/>
    </div>
  );
}

export default App;
