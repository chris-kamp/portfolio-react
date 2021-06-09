import CardSection from "../shared/CardSection"
import TechStackItem from "../shared/TechStackItem"
import TechStackSection from "../shared/TechStackSection"

const ProjectCardTechStack = ({techs}) => {
  return (
    <>
      <CardSection posStart={false} heading="TECH STACK">
        <TechStackSection>
          {techs.map((tech, index) => (
            <TechStackItem key={`${index}`}>{tech}</TechStackItem>
          ))}
        </TechStackSection>
      </CardSection>
    </>
  )
}

export default ProjectCardTechStack
