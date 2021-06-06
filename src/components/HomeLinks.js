import HomeLink from "./HomeLink"

const HomeLinks = () => {
  return (
    <div className="h-4/6 flex flex-col xl:justify-center pl-2 pr-2 xs:pl-5 xs:pr-0 sm:pl-0 sm:items-center w-full pt-12 xl:pt-48">
      <HomeLink text="READ MORE ABOUT ME"/>
      <HomeLink text="SEE MY RECENT PROJECTS"/>
      <HomeLink text="GET IN TOUCH WITH ME"/>
    </div>
  )
}

export default HomeLinks
