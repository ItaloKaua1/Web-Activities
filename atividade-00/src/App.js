import './App.css';
import MeusDados from './components/MeusDados';
import MeusDados2 from './components/MeusDados2';
import Temperatura from './components/Temperatura';

function App() {
  return (
    <div>
      <MeusDados/>
      <MeusDados2
        nome="Ítalo Kauã Vitor Fernandes"
        curso="Engenharia de Software"
        universidade="Universidade Federal do Ceará - Campus Quixadá"
      />
      <Temperatura/>
    </div>
  );
}

export default App;
