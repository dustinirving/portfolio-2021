import React from 'react';
import styled from 'styled-components';
import Dustin from '../images/dustin.jpg';
const About: React.FC = () => {
  return (
    <Container className="flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Dustin Irving
        </h1>
        <h2 className="mb-2 lg:mb-4 md:text-2xl lg:text-3xl text-xl font-semibold italic dark:text-slate-400 p-2 text-center text-gray-500">
          Software Developer
        </h2>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl lg:w-1/2 mx-auto dark:text-gray-400">
          Hi there! I'm Dustin, a software developer based in Ottawa, Canada. I have over 3 years
          experience working as a software developer, primarily focused in front-end web
          development. I enjoy creating all different sorts of applications and I'm constantly
          learning new technologies. Welcome to my portfolio!
        </p>
        <div className="flex justify-center items-center">
          <img
            className="rounded-full w-72 md:w-80 md:h-80 h-72 shadow-black dark:shadow-gray-500 shadow-2xl"
            alt="dustin"
            src={Dustin}
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 60px);
`;

export default About;
