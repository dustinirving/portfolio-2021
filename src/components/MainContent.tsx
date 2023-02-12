import React from 'react';
import styled from 'styled-components';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';

const sections = [
  { id: 'about', component: <About /> },
  { title: 'Experience', id: 'experience', component: <Experience /> },
  { title: 'Projects', id: 'projects', component: <Projects /> },
  { title: 'Education', id: 'education', component: <Education /> },
];

interface MainContentProps {}
const MainContent: React.FC<MainContentProps> = (props) => {
  return (
    <div className="dark:bg-gray-800 bg-slate-50">
      <div className="md:container md:mx-auto px-2">
        {sections.map(({ id, title, component }) => (
          <section key={id}>
            {title && (
              <h2 className="lg:text-3xl text-2xl font-bold dark:text-white p-5 mb-5 text-center">
                {title}
              </h2>
            )}
            {component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
