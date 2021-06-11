import TechStackItem from "../shared/TechStackItem"
import CardSection from "../shared/CardSection"
import TechStackSection from "../shared/TechStackSection"

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
          <TechStackItem>RSPEC</TechStackItem>
          <TechStackItem>JEST</TechStackItem>
          <TechStackItem>POSTGRESQL</TechStackItem>
          <TechStackItem>CLOUDINARY</TechStackItem>
        </TechStackSection>
      </CardSection>
    </>
  )
}

export default TechStack
