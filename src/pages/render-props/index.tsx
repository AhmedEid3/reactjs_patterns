import { Fahrenheit } from './Fahrenheit';
import { Kelvin } from './Kelvin';
import TemperatureConverter from './TemperatureConverter';

const RenderPropsPage = () => {
  return (
    <main className="container">
      <h1>React Patterns</h1>

      <h2>Render Props Pattern</h2>
      <TemperatureConverter RenderKelvin={Kelvin} RenderFahrenheit={Fahrenheit} />
      <TemperatureConverter
        RenderKelvin={({ value }) => <p>{value}</p>}
        RenderFahrenheit={({ value }) => <p>{value}</p>}
      />
    </main>
  );
};

export default RenderPropsPage;
