import TechStackItem from "./TechStackItem"
import CardSection from "./CardSection"
import TechStackSection from "./TechStackSection"

const TechStack = () => {
  return (
    <>
      <CardSection posStart={true} heading="LANGUAGES">
        <TechStackSection>
          <TechStackItem>HTML</TechStackItem>
          <TechStackItem>CSS</TechStackItem>
          <TechStackItem>SCSS</TechStackItem>
          <TechStackItem>JAVASCRIPT</TechStackItem>
          <TechStackItem>RUBY</TechStackItem>
        </TechStackSection>
      </CardSection>

      <CardSection posStart={false} heading="LIBRARIES & FRAMEWORKS">
        <TechStackSection>
          <TechStackItem>REACT</TechStackItem>
          <TechStackItem>RUBY ON RAILS</TechStackItem>
          <TechStackItem>TAILWIND</TechStackItem>
          <TechStackItem>BOOTSTRAP</TechStackItem>
        </TechStackSection>
      </CardSection>

      <CardSection posStart={true} heading="DEV TOOLS">
        <TechStackSection>
          <TechStackItem>GIT</TechStackItem>
          <TechStackItem>GITHUB</TechStackItem>
          <TechStackItem>HEROKU</TechStackItem>
          <TechStackItem>POSTGRESQL</TechStackItem>
          <TechStackItem>CLOUDINARY</TechStackItem>
        </TechStackSection>
      </CardSection>
    </>
  )
}

export default TechStack
