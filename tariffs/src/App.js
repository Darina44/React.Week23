import './App.scss';
import Tariff from './components/Tariff';
import './components/Tariff.scss';
import { tariffs } from './tariffsData.js';

function App() {
  return (
    <div className="App">
      {
        tariffs.map((tariff) => (
          <Tariff key={tariff.id} {...tariff} />
        ))
      }
    </div>
  );
}

export default App;
