import { IconButton, Navbar, Tooltip } from '@dustinirving/react-component-library';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiFileDocument, mdiEmail } from '@mdi/js';
import useTheme from '../hooks/useTheme';
import resume from '../resources/Resume.pdf';
interface HeaderProps {
  activeNavItemId: string;
  setActiveNavItemId: any;
}

const icons = [
  { path: mdiGithub, href: 'https://www.github.com/dustinirving', tooltip: 'Github' },
  { path: mdiLinkedin, href: 'https://www.linkedin.com/in/dustin-irving', tooltip: 'LinkedIn' },
  { path: mdiFileDocument, href: resume, tooltip: 'Resume' },
  {
    path: mdiEmail,
    href: 'mailto:dustin.irving@gmail.com? subject=subject text',
    tooltip: 'Email',
  },
];

export default function Header(props: HeaderProps) {
  const { activeNavItemId } = props;
  const { updateTheme, theme } = useTheme();
  const navItems = [
    { text: 'About', href: '#about', id: 'about', handleClick: () => null },
    {
      text: 'Experience',
      href: '#experience',
      id: 'experience',
      handleClick: () => null,
    },
    {
      text: 'Projects',
      href: '#projects',
      id: 'projects',
      handleClick: () => null,
    },
    {
      text: 'Education',
      href: '#education',
      id: 'education',
      handleClick: () => null,
    },
  ];

  return (
    <div className="flex-initial w-full">
      <Navbar navItems={navItems} activeItemId={activeNavItemId} fixed>
        <Navbar.Items>
          {navItems.map((navItem) => (
            <Navbar.Item {...navItem} active={navItem.id === activeNavItemId} />
          ))}
        </Navbar.Items>
        <div className="flex items-center mr-2">
          {icons.map(({ path, href, tooltip }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className="mr-3">
              <Tooltip text={tooltip}>
                <IconButton className="flex items-center" key={path}>
                  <Icon path={path} className="w-[20px] h-[20px] .icon" />
                </IconButton>
              </Tooltip>
            </a>
          ))}
          <Tooltip text={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
            <IconButton
              className="flex items-center"
              onClick={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <svg
                  aria-hidden="true"
                  id="theme-toggle-light-icon"
                  className="w-[20px] h-[20px]"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[20px]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </IconButton>
          </Tooltip>
        </div>
      </Navbar>
    </div>
  );
}
