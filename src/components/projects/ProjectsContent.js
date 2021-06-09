import Card from "../shared/Card"
import ProjectCardDescription from "./ProjectCardDescription"
import ProjectCardTechStack from "./ProjectCardTechStack"

const projects = [
  {
    title: "PORTFOLIO",
    description: "You're looking at it! My web development portfolio, created in React and styled with Tailwind CSS.",
    techs: ["REACT", "JAVASCRIPT", "TAILWIND", "HTML", "CSS", "GIT", "GITHUB"]
  },
  {
    title: "GUIDESHARE",
    description: "A prototype two-sided marketplace web app created as coursework for the Coder Academy bootcamp. Designed to allow users to upload, buy and sell PDF guides for various tasks.",
    techs: ["RUBY ON RAILS", "HEROKU", "BOOTSTRAP", "HTML", "CSS", "JAVASCRIPT","CLOUDINARY", "STRIPE", "GIT", "GITHUB" ]
  },
  {
    title: "TERMINAL HERO",
    description: "A command-line game created as coursework for the Coder Academy bootcamp, and published as a Ruby gem. Terminal Hero is a simple turn-based roleplaying game in which players create a character, navigate an ASCII-art world map, and engage in turn-based combat with roaming monsters in order to level up.",
    techs: ["RUBY", "GIT", "GITHUB" ]
  },
]

const ProjectsContent = () => {
  return (
    <main className="w-full px-3 sm:px-12">
      <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xs:gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <Card heading={project.title} key={`${index}`}>
            <div className="flex justify-center w-full mb-1">
              <img
                src="https://via.placeholder.com/48"
                alt=""
                className="rounded-full mx-2"
              />
              <img
                src="https://via.placeholder.com/48"
                alt=""
                className="rounded-full mx-2"
              />
              <img
                src="https://via.placeholder.com/48"
                alt=""
                className="rounded-full mx-2"
              />
            </div>
            <ProjectCardDescription>
              {project.description}
            </ProjectCardDescription>
            <ProjectCardTechStack techs={project.techs}/>
          </Card>
        ))}
      </section>
    </main>
  )
}

export default ProjectsContent
