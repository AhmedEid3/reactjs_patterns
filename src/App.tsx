import Listings from './hoc/listing/Listings';
import { Fahrenheit } from './render-props/Fahrenheit';
import { Kelvin } from './render-props/Kelvin';
import TemperatureConverter from './render-props/TemperatureConverter';
import './style.css';

const App = () => {
  return (
    <main className="container">
      <h1>React Patterns</h1>

      <h2>HOC</h2>
      <Listings />

      <hr />

      <h2>Render Props</h2>
      <TemperatureConverter RenderKelvin={Kelvin} RenderFahrenheit={Fahrenheit} />
      <TemperatureConverter
        RenderKelvin={({ value }) => <p>{value}</p>}
        RenderFahrenheit={({ value }) => <p>{value}</p>}
      />

      <hr />
    </main>
  );
};

export default App;
