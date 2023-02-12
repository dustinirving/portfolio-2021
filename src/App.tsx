import MainContent from './components/MainContent';
import Header from './components/Header';
import useDarkMode from './hooks/useDarkMode';
// import { Colors, CSSResets, useSelect } from '@dustinirving/component-library';

const options: { [value: string]: { text: string } } = {
  system: { text: 'System' },
  light: { text: 'Light' },
  dark: { text: 'Dark' },
};

const App: React.FC = () => {
  // const selectProps = useSelect({ initialSelectedValue: 'system', options });
  // const { selectedValue } = selectProps;
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  return (
    <div className={`flex flex-col ${isDarkMode && 'dark'}`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <MainContent />
    </div>
  );
};

export default App;
