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
    title: "React.js Developer",
    company_name: "Webevis Technologies",
    icon: reactjs,
    iconBg: "#383E56",
    date: "July 2022 - Continue",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Developer",
    company_name: "Webevis Technologies",
    icon: uiux,
    iconBg: "#E6DEDD",
    date: "July 2022 - Continue",
    points: [
      "Engaging in UI/UX development is a dynamic and multifaceted process that involves crafting the user interface and enhancing the overall user experience of web applications.",
      "entails harnessing technologies such as React.js and related tools to create interactive, visually appealing, and intuitive interfaces.",
      "This collaborative effort demands close cooperation with cross-functional teams, including designers and product managers, to align development objectives with user expectations.",
    ],
  },
  {
    title: "API Integration",
    company_name: "Webevis Technologies",
    icon: Api,
    iconBg: "#383E56",
    date: "July 2022 - Continue",
    points: [
      "Integrating APIs is a fundamental aspect of modern software development. API integration involves connecting different software systems, enabling them to communicate and share data seamlessly.",
      "This essential process allows for the exchange of information between various applications, platforms, and services.",
      "It plays a pivotal role in building feature-rich web applications and systems that interact with external data sources, such as social media networks, payment gateways, or third-party services.",
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
