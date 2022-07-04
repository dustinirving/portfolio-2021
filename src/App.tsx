import MainContent from './components/MainContent';
import Header from './components/Header';
import { Colors, CSSResets, useSelect } from '@dustinirving/component-library';

const options: { [value: string]: { text: string } } = {
  system: { text: 'System' },
  light: { text: 'Light' },
  dark: { text: 'Dark' },
};

const App: React.FC = () => {
  const selectProps = useSelect({ initialSelectedValue: 'system', options });
  const { selectedValue } = selectProps;
  return (
    <div className="App">
      <Colors mode={selectedValue as 'light' | 'dark' | 'system'} />
      <CSSResets />
      <Header selectProps={selectProps} />
      <MainContent />
    </div>
  );
};

export default App;
