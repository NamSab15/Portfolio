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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  CSA,
  photoshop,
  premierpro,
  phonix,
  Dhruvh,
} from "../assets";


export const navLinks = [
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

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  
  {
    title: "Python",
    icon: backend,
  },
  {
    title: "Video & Photo Editing",
    icon: creator,
  },
];

const technologies = [
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
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premier Pro",
    icon: premierpro,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  
];

const experiences = [
  {
    title: "Associate Treasurer",
    company_name: "UPES - CSA",
    icon: CSA,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "University of Petroleum and Energy Studies, Dehradun, Cloud Security Alliance Student chapter, Nov 2023 ",
      "I entered as a member of the Community Outreach team during the flagship event of my tenure i.e. Hackathon 3.0 and initiated collaboration with IEEE SRM. ",
      "Led a team of individuals during Funtopia 5.0 to make a success story of the chapters' flagship event.",
      "Got appointed as the Associate Treasurer in tenure 2025-26."
      
    ],
  },
  {
    title: "Subhead - Cultural restoration group",
    company_name: "DHRUVH - Social Awareness FOrum",
    icon: Dhruvh,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Working as a subhead for the cultural restoration group for a period of 2 months under DHRUVH(NGO) for Srijan social internship by UPES",
      "Did fund raising and different activities like making banners etc."
      
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Awarded the star performer award for excellent performance in each and every event.",
    name: "UPES-CSA",
    designation: "Company",
    company: "UPES-CSA",
    image: "CSA.png",
  },
];

const projects = [
  {
    name: "Phonix",
    description:
      "Our team created an AI model to classify between Human audio and artificially generated audio to prevent voice phishing attacks. We trained our AI model over teachable machine powered by Google using AI-created samples of the same people to detect even minor variations of the voice. The model attained an accuracy of 89.68% and with our model we qualified as finalists and won the best debutants award in UPES-CSA Hackathon 3.0. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "orange-text-gradient",
      },
      {
        name: "tensorFlow",
        color: "pink-text-gradient",
      },
    ],
    image: phonix,
    // source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
