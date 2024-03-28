import {
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  carrent,
  uiux,
  Api,
  optimization,
  greenme,
  nextjs,
  bootstrap,
  aka,
  shopspy,
  lockey,
  allocateHome,
  smmQuizBg,
  coachbg,
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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Ui/Ux Developer",
    icon: uiux,
  },
  {
    title: "API integration",
    icon: Api,
  },
  {
    title: "Code Customization",
    icon: optimization,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Innovation and Creativity",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Innovation is at the heart of my work. I bring a fresh perspective and creative solutions to every project, pushing boundaries and thinking outside the box to deliver truly unique and impactful results.",
    ],
  },
  {
    title: "Reliability and Consistency",
    icon: uiux,
    iconBg: "#E6DEDD",
    points: [
      "You can count on me to deliver consistently excellent work, every time. With a track record of reliability and a commitment to meeting deadlines, I ensure that your project progresses smoothly and is completed to the highest standards.",
    ],
  },
  {
    title: "Communication and Collaboration",
    icon: Api,
    iconBg: "#383E56",
    points: [
      "Effective communication is key to project success. I prioritize open and transparent communication, keeping you informed every step of the way and actively seeking your input to ensure that your vision is fully realized.",
    ],
  },
  {
    title: "Passion and Dedication",
    icon: Api,
    iconBg: "#383E56",
    points: [
      "I am passionate about what I do, and that passion shines through in every project I undertake. With unwavering dedication and a relentless pursuit of excellence, I go above and beyond to exceed your expectations and deliver results that truly impress.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Atif proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Atif does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Atif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Lockey Connect",
    description:
      "Lockey Connect is an innovative online platform designed for property buyers and agents to seamlessly connect and facilitate property transactions. With a focus on convenience and security, Lockey Connect offers a robust set of features to streamline the buying and selling process, ensuring a smooth and efficient experience for all users involved.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
    ],
    image: lockey,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Emissary",
    description:
      "Emissary is a cutting-edge payout and treasury management solution tailored for Web3.0 Companies, DAO organizations, and individual projects within the TRON ecosystem. Offering seamless functionality and a comprehensive feature set, Emissary serves as a one-stop platform for efficient payout operations.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Components",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: allocateHome,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Project Coach",
    description:
      "Project Coach, a game-changing SaaS venture focused on empowering small and medium-sized businesses (SMEs) with data-driven insights. With a mission to democratize business intelligence and foster growth, Project Coach provides a robust assessment tool and ongoing support to help SMEs thrive in today's competitive market.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Styled Components",
        color: "green-text-gradient",
      },
    ],
    image: coachbg,
  },
  {
    name: "SSM Quiz",
    description:
      "SSM Quiz Platform tailored specifically for medical students. This platform serves as a comprehensive learning tool designed to enhance medical knowledge and prepare students for exams with interactive quizzes and study resources.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Style Components",
        color: "pink-text-gradient",
      },
    ],
    image: smmQuizBg,
  },
  {
    name: "ShopSpy",
    description:
      "ShopSpy is a web application allowing users to compare prices of various products across different online retailers for informed shopping decisions.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Styled Components",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shopspy,
  },
];

export { services, technologies, experiences, testimonials, projects };
