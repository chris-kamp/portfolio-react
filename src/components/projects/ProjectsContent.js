import Card from "../shared/Card";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardTechStack from "./ProjectCardTechStack";
import ProjectLinks from "./ProjectLinks";
import githubLogoLight from "../../assets/github-logo-light-64.png";
import materialLaunch from "../../assets/material-launch-48.png";

const projects = [
  {
    title: "PORTFOLIO",
    description:
      "You're looking at it! My web development portfolio, created in React, styled using Tailwind CSS and deployed using Netlify. The site is fully responsive, and implements dynamic routing using react-router-dom and contact form submission using emailjs.",
    techs: ["REACT", "JAVASCRIPT", "TAILWIND", "HTML", "CSS", "GIT", "GITHUB", "EMAILJS", "NETLIFY"],
    links: [
      {
        imgSrc: githubLogoLight,
        imgAlt: "GitHub Logo",
        aHref: "https://github.com/chris-kamp/portfolio-react",
        caption: "GITHUB",
      },
    ],
  },
  {
    title: "GUIDESHARE",
    description:
      "A prototype two-sided marketplace web app created as coursework for the back-end component of the Coder Academy bootcamp. Users can upload, buy and sell PDF guides for various tasks. The site was created in Ruby on Rails with a PostgreSQL database and deployed using Heroku. Features include file upload and retrieval using the Cloudinary CDN, user login and authentication using Devise and payment processing using Stripe.",
    techs: [
      "RUBY ON RAILS",
      "HEROKU",
      "BOOTSTRAP",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "CLOUDINARY",
      "STRIPE",
      "DEVISE",
      "GIT",
      "GITHUB",
    ],
    links: [
      {
        imgSrc: githubLogoLight,
        imgAlt: "GitHub Logo",
        aHref: "https://github.com/chris-kamp/guideshare",
        caption: "GITHUB",
      },
      {
        imgSrc: materialLaunch,
        imgAlt: "Launch Symbol",
        aHref: "https://guideshare.herokuapp.com/",
        caption: "OPEN",
      },
    ],
  },
  {
    title: "TERMINAL HERO",
    description:
      "A command-line game created as coursework for the Coder Academy bootcamp and published as a Ruby gem. Terminal Hero is a simple roleplaying game in which players create a character, navigate an ASCII-art world map, and engage in turn-based combat with roaming monsters in order to level up.",
    techs: ["RUBY", "GIT", "GITHUB"],
    links: [
      {
        imgSrc: githubLogoLight,
        imgAlt: "GitHub Logo",
        aHref: "https://github.com/chris-kamp/terminal-hero",
        caption: "GITHUB",
      },
    ],
  },
];

const ProjectsContent = () => {
  return (
    <main className="w-full px-3 sm:px-12">
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xs:gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <Card heading={project.title} key={`${index}`}>
            <ProjectLinks links={project.links} />
            <ProjectCardDescription>
              {project.description}
            </ProjectCardDescription>
            <ProjectCardTechStack techs={project.techs} />
          </Card>
        ))}
      </section>
    </main>
  );
};

export default ProjectsContent;
