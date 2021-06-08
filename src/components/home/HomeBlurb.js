import { Link } from "react-router-dom";

const HomeBlurb = () => {
  return (
  <div className="flex items-center h-4/6">
    <div className="p-0 ml-3 mr-3 sm:ml-12 sm:mr-0 sm:mt-16">
      <h1 className="mb-4 text-7xl sm:text-8xl">Hi, I'm Chris.</h1>
      <p className="leading-normal xs:leading-relaxed sm:leading-relaxed text-2xl sm:text-3xl ml-1.5">I'm a full-stack web developer in training. Until recently, I worked as a lawyer, but my passion for coding got the better of me. I'd love to help you build modern, engaging web applications. You can get in touch with me <Link to="/contact" className="underline">here</Link>.</p>
    </div>
  </div>
  )
}

export default HomeBlurb
