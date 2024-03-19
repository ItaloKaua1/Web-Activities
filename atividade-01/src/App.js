import './App.css';
import Pai from './components/atividade01/questao01/01Pai';
import { PlacaMae as PCPlacaMae, Memoria as PCMemoria, PlacaDeVideo as PCPlacaDeVideo} from './components/atividade01/02MeuPC';

function App() {
  return (
    <div>
      <Pai/>
      <h2>Peças meu pc:</h2>
      <PCPlacaMae nome="Gigabyte B550M AORUS Elite" preco="749,00"/>
      <PCMemoria nome="Asgard Loki W2" preco="288,85"/>
      <PCPlacaDeVideo nome="RTX 4060 8GB" preco="2.098,00"/>
    </div>
  );
}

export default App;
