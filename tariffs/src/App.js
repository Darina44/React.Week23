import './App.scss';
import Tariff from './components/Tariff';
import './components/Tariff.scss';
import { tariffs } from './tariffsData.js';

function App() {
  return (
    <div className="App">
      {
        tariffs.map((tariff) =>
          <Tariff key={tariff.id} name={tariff.name} price={tariff.price} speed={tariff.price} features={tariff.features} color={tariff.color} isSelected={tariff.isSelected} />
        )
      }
    </div>
  );
}

export default App;
