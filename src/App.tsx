import MainContent from './components/MainContent';
import Header from './components/Header';
import { useState } from 'react';
// import 'tailwind-component-library/themes.css';
// import { Colors, CSSResets, useSelect } from '@dustinirving/component-library';

const options: { [value: string]: { text: string } } = {
  system: { text: 'System' },
  light: { text: 'Light' },
  dark: { text: 'Dark' },
};

const App: React.FC = () => {
  // const selectProps = useSelect({ initialSelectedValue: 'system', options });
  // const { selectedValue } = selectProps;
  const [activeNavItemId, setActiveNavItemId] = useState('about');

  return (
    <div className="flex flex-col">
      <Header activeNavItemId={activeNavItemId} setActiveNavItemId={setActiveNavItemId} />
      <MainContent activeNavItemId={activeNavItemId} setActiveNavItemId={setActiveNavItemId} />
    </div>
  );
};

export default App;
