import project1 from "../assets/projects/project11.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project.jpeg";

export const HERO_CONTENT = `A passionate Full Stack Web Developer with expertise in React.js, Next.js, and Tailwind CSS, dedicated to building responsive, scalable, and high-performance web applications. Currently pursuing my B.Tech in Computer Science (2026) at Uttaranchal University, I combine technical knowledge with a keen eye for clean code and intuitive UX. I’ve also contributed to frontend architecture during my internship at Ftechiz Solutions, collaborating with teams to deliver seamless digital experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024",
    role: "Frontend Developer Intern",
    company: "Ftechiz Solutions",
    description: `I built modular and responsive templates using CSS and JavaScript to optimize performance across devices, collaborated with cross-functional teams to meet project deadlines while consistently delivering ahead of schedule, and converted UI/UX prototypes into dynamic web applications that aligned seamlessly with design specifications.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  }
];

export const PROJECTS = [
  {
    title: "School Website (Freelanced)",
    image: project1,
    link: "https://www.greenheavenacademy.in/",
    description:
      "Developed a responsive school website as a freelance project using Next.js, React.js, and Tailwind CSS to ensure high performance, modern UI, and fast-loading pages. Employed Git and GitHub for version control to enable smooth collaboration and effective teamwork. Deployed the site on Vercel, providing reliable hosting and continuous deployment for future updates.",
    technologies: ["Next.js",
      "TailwindCSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Git",
      "GitHub",
      "MongoDB",
      "Vercel (for deployment)"],
  },
  {
    title: "Scholio (Dashboard)",
    image: project4,
    link: "https://scholio.vercel.app/",
    description:
      "The School Management Dashboard is a modern, intuitive, and highly responsive web application designed to streamline school administration, teaching, learning, and parent engagement. Built with cutting-edge technologies, it offers a seamless user experience with role-based access control for admins, teachers, students, and parents, ensuring secure and efficient management of academic activities.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Git",
      "GitHub",
      "MongoDB",
      "Vercel (Frontend Deployment)",
      "Render (Backend Deployment)"
    ],
  },
  {
    title: "FoodCription Website (Freelanced)",
    image: project2,
    link: "https://food-cription.vercel.app/",
    description:
      "Developed a health-focused meal recommendation platform to help professionals make better food choices based on their needs, using Next.js, React.js, and TailwindCSS for a responsive frontend, with Node.js for backend logic. The project was deployed on Vercel and managed via Git/GitHub, delivering a scalable solution that prioritizes user experience and clean code.",
    technologies: ["Next.js", "TailwindCSS", "JavaScript", "React.js", "Node.js", "Git", "GitHub", "Vercel (for deployment)"],
  },
  {
    title: "Weather App",
    image: project3,
    link: "https://yash-rajvanshi.github.io/Weather-App/",
    description:
      "Developed a weather application leveraging the OpenWeather API to deliver real-time forecasts, with dynamic location-based weather retrieval. Built with HTML, CSS, and vanilla JavaScript, the app features an interactive and fully responsive user interface designed for seamless cross-device compatibility. The clean, intuitive design prioritizes usability with instant weather updates and minimal loading times.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
