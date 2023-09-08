import SearchInput from './compound/components/SearchInput';
import ListingsHOC from './hoc/listing/Listings';
import ListingsHook from './hook/presentation/Listings';
import Input from './provider/components/Input';
import ListingsProviderPattern from './provider/components/Listings';
import ListingsCompoundPattern from './compound/components/Listings';
import ThemeView from './provider/components/ThemeView';
import ToggleThemeBtn from './provider/components/ToggleThemeBtn';
import { ListingsProvider } from './provider/useListingsContext';
import { ListingsProvider as ListingsProviderCompound } from './compound/useListingsContext';
import { ThemeProvider } from './provider/useThemeContext';
import { Fahrenheit } from './render-props/Fahrenheit';
import { Kelvin } from './render-props/Kelvin';
import TemperatureConverter from './render-props/TemperatureConverter';
import './style.css';

const App = () => {
  return (
    <main className="container">
      <h1>React Patterns</h1>

      <h2>HOC Pattern</h2>
      <ListingsHOC />

      <hr />

      <h2>Render Props Pattern</h2>
      <TemperatureConverter RenderKelvin={Kelvin} RenderFahrenheit={Fahrenheit} />
      <TemperatureConverter
        RenderKelvin={({ value }) => <p>{value}</p>}
        RenderFahrenheit={({ value }) => <p>{value}</p>}
      />

      <hr />

      <h2>Hook Pattern</h2>
      <ListingsHook />
      <hr />

      <h2>Provider Pattern</h2>
      <ListingsProvider>
        <ThemeProvider>
          <ToggleThemeBtn />
          <ThemeView />
          <Input />
          <ListingsProviderPattern />
        </ThemeProvider>
      </ListingsProvider>

      <hr />

      <h2>Compound Pattern</h2>
      <ListingsProviderCompound>
        <SearchInput />
        <ListingsCompoundPattern />
      </ListingsProviderCompound>
      <hr />
    </main>
  );
};

export default App;
