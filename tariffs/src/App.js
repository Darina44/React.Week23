import './App.scss';
import Tariff from './components/Tariff';
import { tariffs } from './tariffsData.js';

function App() {
  return (
    <div className="App">
      {
        tariffs.map((tariff, index) =>
          <Tariff key="index" name={tariff.name} price={tariff.price} speed={tariff.price} features={tariff.features} />
        )
      }
    </div>
  );
}

export default App;
