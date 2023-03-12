import React from 'react';
import { Link } from 'tailwind-component-library';

const Experience: React.FC = () => {
  return (
    <div className="xl:w-2/3 mx-auto">
      <ul>
        <li>
          <div className="flex justify-between flex-wrap">
            <h3 className="mb-2 lg:text-xl text-lg font-semibold text-gray-900 dark:text-gray-100">
              Software Developer @{' '}
              <span>
                <Link href="https://solink.com/">Solink</Link>
              </span>
            </h3>
            <p className="mb-2 text-gray-500 dark:text-slate-300 lg:text-lg italic">
              Sept 2020 - Present (Ottawa, Canada)
            </p>
          </div>
          <ul className="space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400">
            <li className="pb-3">
              Contributed to the development of a sophisticated video surveillance and POS data web
              application built in React, Redux, TypeScript and Sass.
            </li>
            <li className="pb-3">
              Worked alongside product managers and other developers to create many robust new
              features.
            </li>
            <li className="pb-3">
              Main contributor to our own reusable React component library with Storybook.
            </li>
            <li className="pb-3">
              Lead developer for a responsive web application in React that allows users to watch
              video alarm footage and saved video clips in the cloud.
            </li>
            <li className="pb-3">
              Created and maintained unit and integration tests with Jest, Chai, Vitest, Cypress,
              Testcafe and Selenium.
            </li>
            <li className="pb-3">
              Responsible for troubleshooting product issues and making quick bug fixes to provide
              excellent customer satisfaction.
            </li>
            <li className="pb-3">Created github actions to facilitate development</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
