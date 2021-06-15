import ScrollToTop from "../utilities/ScrollToTop";
import ProjectsContent from "./ProjectsContent";
import ProjectsHeading from "./ProjectsHeading";

const Project = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <ProjectsHeading />
        <ProjectsContent />
      </div>
    </>
  );
};

export default Project;
