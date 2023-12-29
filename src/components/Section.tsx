import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  component: React.ReactNode;
  activeNavItemId: string;
  setActiveNavItemId: React.Dispatch<React.SetStateAction<string>>;
}

export default function Section(props: SectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { id, title, component, setActiveNavItemId } = props;
  useEffect(() => {
    const scrollHandler = () => {
      if (sectionRef.current !== null && sectionRef.current.getBoundingClientRect().top <= 0) {
        setActiveNavItemId(id);
      }
    };
    document.addEventListener('scroll', scrollHandler);

    return () => document.removeEventListener('scroll', scrollHandler);
  }, [sectionRef]);

  return (
    <section
      key={id}
      id={id}
      ref={sectionRef}
      className="min-h-[100vh] flex items-center justify-center flex-col"
    >
      {title && (
        <h2 className="lg:text-3xl text-2xl font-semibold dark:text-white p-5 mb-5 text-center">
          {title}
        </h2>
      )}
      {component}
    </section>
  );
}
