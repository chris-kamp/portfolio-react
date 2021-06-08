const TechStack = () => {
  return (
    <div className="text-light">


      <div className="flex justify-start">
        <div className="flex flex-col w-full">
          <div className="w-11/12 xs:w-10/12 mt-2 mb-3 border-b border-primary">
            <h3 className="font-bold text-sm xs:text-md tracking-3xwide">LANGUAGES</h3>
          </div>
          <div className="flex flex-wrap w-11/12 xs:w-10/12 text-xs xs:text-sm">
              <div className="flex justify-between flex-wrap w-full">
                <span className="mr-4">HTML</span>
                <span className="mr-4">CSS</span>
                <span className="mr-4">SCSS</span>
                <span className="mr-4">JAVASCRIPT</span>
                <span className="mr-4">RUBY</span>
              </div>
          </div>
        </div>
      </div>


      <div className="flex justify-end">
        <div className="flex flex-col w-full items-end">
          <div className="w-11/12 xs:w-10/12 mt-2 mb-3 border-b border-primary">
            <h3 className="font-bold text-sm xs:text-md tracking-3xwide text-right">LIBRARIES & FRAMEWORKS</h3>
          </div>
          <div className="flex flex-wrap justify-between w-11/12 xs:w-10/12 text-xs xs:text-sm">
            <span className="mr-4">REACT</span>
            <span className="mr-4">RUBY ON RAILS</span>
            <span className="mr-4">TAILWIND</span>
            <span className="mr-4">BOOTSTRAP</span>
          </div>
        </div>
      </div>

      <div className="flex justify-start">
        <div className="flex flex-col w-full">
          <div className="w-11/12 xs:w-10/12 mt-2 mb-3 border-b border-primary">
            <h3 className="font-bold text-sm xs:text-md tracking-3xwide">DEV TOOLS</h3>
          </div>
          <div className="flex flex-wrap w-11/12 text-xs xs:text-sm">
            <span className="mr-4">GIT</span>
            <span className="mr-4">GITHUB</span>
            <span className="mr-4">HEROKU</span>
            <span className="mr-4">POSTGRESQL</span>
            <span className="mr-4">CLOUDINARY</span>
          </div>
        </div>
      </div>


    </div>
  )
}

export default TechStack
