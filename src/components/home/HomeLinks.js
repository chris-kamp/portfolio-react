import HomeLink from "./HomeLink"

const HomeLinks = () => {
  return (
    <div className="flex flex-col w-full pt-12 pl-2 pr-2 h-4/6 xl:justify-center xs:pl-5 xs:pr-0 sm:pl-0 sm:items-center xl:pt-48">
      <HomeLink destination="/about" text="READ MORE ABOUT ME"/>
      <HomeLink destination="/projects" text="SEE MY RECENT PROJECTS"/>
      <HomeLink destination="/contact" text="GET IN TOUCH WITH ME"/>
    </div>
  )
}

export default HomeLinks
