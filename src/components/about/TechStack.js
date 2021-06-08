import TechStackItem from "./TechStackItem"
import TechStackSection from "./TechStackSection"

const TechStack = () => {
  return (
    <div>
      <TechStackSection posStart={true} heading="LANGUAGES">
        <TechStackItem>HTML</TechStackItem>
        <TechStackItem>CSS</TechStackItem>
        <TechStackItem>SCSS</TechStackItem>
        <TechStackItem>JAVASCRIPT</TechStackItem>
        <TechStackItem>RUBY</TechStackItem>
      </TechStackSection>

      <TechStackSection posStart={false} heading="LIBRARIES & FRAMEWORKS">
        <TechStackItem>REACT</TechStackItem>
        <TechStackItem>RUBY ON RAILS</TechStackItem>
        <TechStackItem>TAILWIND</TechStackItem>
        <TechStackItem>BOOTSTRAP</TechStackItem>
      </TechStackSection>

      <TechStackSection posStart={true} heading="DEV TOOLS">
        <TechStackItem>GIT</TechStackItem>
        <TechStackItem>GITHUB</TechStackItem>
        <TechStackItem>HEROKU</TechStackItem>
        <TechStackItem>POSTGRESQL</TechStackItem>
        <TechStackItem>CLOUDINARY</TechStackItem>
      </TechStackSection>
    </div>
  )
}

export default TechStack
