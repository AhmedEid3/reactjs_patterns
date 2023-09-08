import useThemeContext from '../useThemeContext';

const ToggleThemeBtn = () => {
  const { toggleTheme, theme } = useThemeContext();

  console.log('ToggleThemeBtn', theme);
  return (
    <div>
      <h3>ToggleThemeBtn</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleThemeBtn;
