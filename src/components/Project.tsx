import React from 'react';
import { Card } from '@dustinirving/react-component-library';

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <Card>
      <Card.Media image="https://flowbite.com/docs/images/blog/image-1.jpg" />
      <Card.Content>
        <Card.Title>Title</Card.Title>
        <Card.Paragraph>Content</Card.Paragraph>
      </Card.Content>
    </Card>
  );
};

export default Project;
