import React from 'react';
import { Card, CardMedia, CardContent, CardTitle, CardParagraph } from 'tailwind-component-library';

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  return (
    <Card>
      <CardMedia image="https://flowbite.com/docs/images/blog/image-1.jpg" />
      <CardContent>
        <CardTitle>Title</CardTitle>
        <CardParagraph>Content</CardParagraph>
      </CardContent>
    </Card>
  );
};

export default Project;
