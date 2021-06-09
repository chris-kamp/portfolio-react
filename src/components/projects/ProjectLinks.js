const ProjectLinks = ({links}) => {
  return (
    <div className="flex justify-center w-full mb-1">
      {links.map((link, index) => (
        <a href={`${link.aHref}`} className="rounded-full mx-2" target="_blank" rel="noreferrer" key={index}>
          <figure className="w-max flex flex-col items-center ">
            <img
              className="w-8 md:w-12"
              src={link.imgSrc}
              alt={link.imgAlt}
            />
            <figcaption className="text-xs text-center">{link.caption}</figcaption>
          </figure>
        </a>
      ))}
    </div>
  )
}

export default ProjectLinks
