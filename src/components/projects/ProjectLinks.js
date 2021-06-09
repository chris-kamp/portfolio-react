const ProjectLinks = ({links}) => {
  return (
    <div className="flex justify-center w-full mb-1">
      {links.map((link, index) => (
        <a href={`${link.aHref}`}>
          <img
            src={link.imgSrc}
            alt={link.imgAlt}
            className="rounded-full mx-2"
            key={``}
          />
        </a>
      ))}
    </div>
  )
}

export default ProjectLinks
