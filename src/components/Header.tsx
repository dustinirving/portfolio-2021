import React from 'react';
import { Flex, NavBar, Select, SelectProps } from '@dustinirving/component-library';
import { ReactComponent as Github } from '@mdi/svg/svg/github.svg';
import { ReactComponent as LinkedIn } from '@mdi/svg/svg/linkedin.svg';
import { ReactComponent as Resume } from '@mdi/svg/svg/file-document.svg';
import { ReactComponent as Email } from '@mdi/svg/svg/email.svg';

const navItems = [
  { text: 'About', href: '#about', active: true },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
  { text: 'Education', href: '#education' },
];

interface HeaderProps {
  selectProps: SelectProps;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { selectProps } = props;
  return (
    <Flex alignItems="center">
      <div style={{ width: '100px' }}>
        <Select {...selectProps} />
      </div>
      <Github fill="var(--color-text)" />
      <LinkedIn fill="var(--color-text)" />
      <Resume fill="var(--color-text)" />
      <Email fill="var(--color-text)" />
      <NavBar navItems={navItems} position="right" />
    </Flex>
  );
};

export default Header;
