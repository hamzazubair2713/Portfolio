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
    name: "Webevis",
    description:
      "Webevis.com is a website that offers a platform for creating, sharing, and discovering interactive web-based visual stories, fostering creativity and engagement.",
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
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Green Me",
    description:
      "GreenMe is a platform by Fleet Forum promoting sustainable practices in humanitarian aid and development, offering resources, news, and networking opportunities.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: greenme,
    // source_code_link: "https://github.com/",
  },
  {
    name: "Aka People",
    description:
      "Aka People offers comprehensive freight solutions, including warehousing, transportation, and supply chain management, ensuring efficient and reliable delivery services.",
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
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: aka,
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
