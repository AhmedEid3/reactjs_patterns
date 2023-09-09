import Input from './components/Input';
import ThemeView from './components/ThemeView';
import ToggleThemeBtn from './components/ToggleThemeBtn';
import { ListingsProvider } from './useListingsContext';
import ListingsProviderPattern from './components/Listings';
import { ThemeProvider } from './useThemeContext';

const ProviderPage = () => {
  return (
    <main className="container">
      <h1>React Patterns</h1>

      <h2>Provider Pattern</h2>
      <ListingsProvider>
        <ThemeProvider>
          <ToggleThemeBtn />
          <ThemeView />
          <Input />
          <ListingsProviderPattern />
        </ThemeProvider>
      </ListingsProvider>
    </main>
  );
};

export default ProviderPage;
