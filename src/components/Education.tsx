import React from 'react';
import {
  Link,
  Timeline,
  TimelineItem,
  TimelineParagraph,
  TimelineTime,
  TimelineTitle,
} from 'tailwind-component-library';

const educationItems = [
  {
    id: 'biochemistry',
    title: 'Bachelor of Science in Biochemistry @ ',
    institution: 'University of Ottawa',
    institutionLink: 'https://www.uottawa.ca/',
    timeAndPlace: 'Sep 2012 - Apr 2016 (Ottawa, Canada)',
    description:
      'Earned a Honours Bachelor of Science with a Specialization in Biochemistry ($2000 Scholarship)',
  },
  {
    id: 'bootcamp',
    title: 'Certificate in Web Development @ ',
    institution: 'Carleton University',
    institutionLink: 'https://carleton.ca/',
    timeAndPlace: 'Feb 2020 - July 2020 (Ottawa, Canada)',
    description: 'A 6-month intensive coding bootcamp in full stack web development (A+ Average)',
  },
];

export default function Education() {
  return (
    <Timeline>
      {educationItems.map((item) => (
        <TimelineItem>
          <TimelineTime>{item.timeAndPlace}</TimelineTime>
          <TimelineTitle>
            {item.title}
            <Link href={item.institutionLink}>{item.institution}</Link>
          </TimelineTitle>
          <TimelineParagraph>{item.description}</TimelineParagraph>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

// const Education = () => {
// return (
//   <div>
//     Carleton University ( Feb 2020 - Jul 2020 ) Certificate in Web Development - A+ Average A
//     6-month intensive coding bootcamp in full stack web development. University of Ottawa ( Sep
//     2016 - Oct 2016 ) TESL Certificate Completed a 100 hour certificate to Teach English as a
//     Second Language. University of Ottawa ( Sep 2012 - Apr 2016 ) Bachelor of Science in
//     Biochemistry - $2000 Scholarship Earned a Honours Bachelor of Science with a Specialization in
//     Biochemistry
//   </div>
// );
//   return (
//     <div className="xl:w-2/3 mx-auto">
//       <ul>
//         {educationItems.map(
//           ({ id, title, institution, institutionLink, timeAndPlace, descriptionItems }) => (
//             <li key={id}>
//               <div className="flex justify-between flex-wrap">
//                 <h3 className="mb-2 lg:text-xl text-lg font-semibold text-gray-900 dark:text-gray-100">
//                   {title}
//                   <span>
//                     <a
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       href={institutionLink}
//                       className="font-medium text-sky-700 hover:text-sky-500 dark:text-sky-500 hover:dark:text-sky-600"
//                     >
//                       {institution}
//                     </a>
//                   </span>
//                 </h3>
//                 <p className="mb-2 text-gray-500 dark:text-white lg:text-lg italic">
//                   {timeAndPlace}
//                 </p>
//               </div>
//               <ul className="space-y-1 text-lg text-gray-500 list-disc list-inside dark:text-gray-400">
//                 {descriptionItems.map((description) => (
//                   <li className="pb-3" key={description}>
//                     {description}
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ),
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Education;
