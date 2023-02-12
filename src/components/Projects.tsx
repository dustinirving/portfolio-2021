import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <div className="flex justify-center">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Projects;
