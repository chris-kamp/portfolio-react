import Navbar from "../nav/Navbar"
import ProjectsContent from "./ProjectsContent"
import ProjectsHeading from "./ProjectsHeading"

const Project = () => {
  return (
    <div className="grid h-screen grid-rows-2af">
      <Navbar />
      <div>
        <ProjectsHeading />
        <ProjectsContent />
      </div>
    </div>
  )
}

export default Project
