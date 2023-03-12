import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Section from './Section';

const sections = [
  { id: 'about', component: <About /> },
  { title: 'Experience', id: 'experience', component: <Experience /> },
  { title: 'Projects', id: 'projects', component: <Projects /> },
  { title: 'Education', id: 'education', component: <Education /> },
];

interface MainContentProps {
  activeNavItemId: string;
  setActiveNavItemId: React.Dispatch<React.SetStateAction<string>>;
}
const MainContent: React.FC<MainContentProps> = (props) => {
  const { activeNavItemId, setActiveNavItemId } = props;
  return (
    <div className="md:container md:mx-auto px-2">
      {sections.map((sectionParams) => {
        const sectionProps = { ...sectionParams, activeNavItemId, setActiveNavItemId };
        return <Section {...sectionProps} />;
      })}
    </div>
  );
};

export default MainContent;
