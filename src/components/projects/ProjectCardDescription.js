import CardSection from "../shared/CardSection"
import TextPara from "../shared/TextPara"

const ProjectCardDescription = (props) => {
  return (
    <>
      <CardSection posStart={true} noTopMargin={true} heading="DESCRIPTION">
        <TextPara>
          {props.children}
        </TextPara>
      </CardSection>

    </>
  )
}

export default ProjectCardDescription
