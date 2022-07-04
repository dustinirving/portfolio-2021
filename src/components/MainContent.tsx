import React from 'react';
import styled from 'styled-components';

const sections = [
  { title: 'About', id: 'about' },
  { title: 'Experience', id: 'experience' },
  { title: 'Projects', id: 'projects' },
  { title: 'Eduction', id: 'education' },
];
interface MainContentProps {}
const MainContent: React.FC<MainContentProps> = (props) => {
  return (
    <Wrapper>
      {sections.map(({ id, title }) => (
        <Section key={id}>
          <H2 id={id}>{title}</H2>
        </Section>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f8f8f8;
`;

const Section = styled.section`
  height: 100vh;
`;

const H2 = styled.h2`
  font-size: 18px;
`;

export default MainContent;
