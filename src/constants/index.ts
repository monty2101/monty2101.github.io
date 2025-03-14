import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  // meta,
  leetcode,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "Web & Mobile Interface Designer",
    icon: mobile,
  },
  {
    title: "Figma Expert",
    icon: backend,
  },
  {
    title: "User Research & Usability Testing",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "UI/UX Designer",
    companyName: "Phn Labs",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "june 2024 - july 2024",
    points: [
      "Developed an online interface to report churn rate of the customer.",
      "Worked with customer to improve UI experience of Customer.",
      "Kept a hygiene check on all the development operations of the company.",
      "Skills Acquired: React, Figma, UI, Web Development, Coding Best Practices.",
    ],
  },
    {
      title: "Undergrad from NSUT",
      companyName: "NSUT",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2021 - May 2025",
      points: [
        "Pursued Electronics and Communication Engineering degree at NSUT, building expertise in circuit design and communication systems.",
    
    "Led UI/UX design for major campus festivals Moksha and Resonance, creating engaging digital experiences.",
    
    "Developed custom themes and visual identities for university events that enhanced attendee experience.",

    "Collaborated with event teams to implement functional and aesthetically appealing digital solutions for thousands of participants."
  ],
    },{
    title: "Competitive Programmer",
    companyName: "leetcode",
    icon: leetcode,
    iconBg: "#383E56",
    date: "July 2024 - present",
    points: [
      "Solved more then 328 Questions on LeetCode",
      "Have a contest rating of 1706.",
      "secured a rank of 1403 Biweekly contest 135",
      "Participating in code reviews and providing constructive feedback to other competitive coders.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: "Shivanshu's eye for UI/UX design transformed our product interfaces completely. His ability to balance aesthetics with functionality gave our applications the professional edge we were looking for.",
    name: "Sayyam",
    designation: "Team Lead",
    company: "PHN Labs",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    testimonial: "Working with Shivanshu on Moksha and Resonance was a game-changer. His intuitive designs and quick implementation skills helped us create the most visually stunning festival experience NSUT has seen.",
    name: "Tejasv",
    designation: "Fest Head",
    company: "NSUT ",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
  },
  {
    testimonial: "Shivanshu has an exceptional talent for color theory and thematic design. His input on our interface theme and color palette dramatically improved user engagement and overall experience.",
    name: "Abhishek",
    designation: "Founder",
    company: "Rhino Text",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Burger Company",
    description:
      "A bold, high-quality UI with an interactive burger visual, clear typography, and a warm colour palette, ensuring an engaging user experience.                                  ",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Landing page",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "",
  },
  {
    name: "Coffee Shop Mobile App",
    description:
      "Designed wireframes with Auto Layout, Variants, and Prototyping for a seamless and highly interactive mobile experience.",
    tags: [
      {
        name: "Fig jam",
        color: "blue-text-gradient",
      },
      {
        name: "Iconify-plugins",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "",
  },
  {
    name: "Doctor Appointment Booking System",
    description:
      "Enhanced UI/UX with Figma and Framer Motion, reducing no-shows by 40% and improving load speed with Tailwind and Lazy Loading.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "",
  },
  
];


export { services, technologies, experiences, testimonials, projects };
