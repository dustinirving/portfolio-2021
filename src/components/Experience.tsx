import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="xl:w-2/3 mx-auto">
      <ul>
        <li>
          <div className="flex justify-between flex-wrap">
            <h3 className="mb-2 lg:text-xl text-lg font-semibold text-gray-900 dark:text-gray-100">
              Software Developer @{' '}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://solink.com/"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline italic"
                >
                  Solink
                </a>
              </span>{' '}
            </h3>
            <p className="mb-2 text-gray-500 dark:text-white lg:text-lg italic">
              Sept 2020 - Present (Ottawa, Canada)
            </p>
          </div>
          <ul className="space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400">
            <li className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat varius eros
              at facilisis. Maecenas fermentum enim in nisi commodo, eu pellentesque elit lobortis.
              Cras bibendum nulla sed erat commodo varius. Suspendisse eu quam vulputate, fringilla
              justo dapibus, pellentesque nulla.
            </li>
            <li className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat varius eros
              at facilisis. Maecenas fermentum enim in nisi commodo, eu pellentesque elit lobortis.
              Cras bibendum nulla sed erat commodo varius. Suspendisse eu quam vulputate, fringilla
              justo dapibus, pellentesque nulla.
            </li>
            <li className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat varius eros
              at facilisis. Maecenas fermentum enim in nisi commodo, eu pellentesque elit lobortis.
              Cras bibendum nulla sed erat commodo varius. Suspendisse eu quam vulputate, fringilla
              justo dapibus, pellentesque nulla.
            </li>
            <li className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat varius eros
              at facilisis. Maecenas fermentum enim in nisi commodo, eu pellentesque elit lobortis.
              Cras bibendum nulla sed erat commodo varius. Suspendisse eu quam vulputate, fringilla
              justo dapibus, pellentesque nulla.
            </li>
            <li className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat varius eros
              at facilisis. Maecenas fermentum enim in nisi commodo, eu pellentesque elit lobortis.
              Cras bibendum nulla sed erat commodo varius. Suspendisse eu quam vulputate, fringilla
              justo dapibus, pellentesque nulla.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
