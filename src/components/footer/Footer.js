import liLogo from "../../assets/linkedin-logo-64-whitefill.png";
import githubLogoLight from "../../assets/github-logo-light-64.png";
import twitterLogo from "../../assets/twitter-logo-64.png";


const Footer = () => {
  return (
    <div className="flex justify-center w-full mt-4">
      <div className="justify-center flex border-t border-primary py-3 w-8/12 border-opacity-60">
        <a
          href="https://github.com/chris-kamp"
          className="rounded-full mx-2 transition-transform transform hover:scale-110 active:scale-95"
          target="_blank"
          rel="noreferrer"
        >
            <img className="w-8" src={githubLogoLight} alt="GitHub logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/chris-kamp-b3976068/"
          className="rounded-full mx-2 transition-transform transform hover:scale-110 active:scale-95"
          target="_blank"
          rel="noreferrer"
        >
            <img className="w-8" src={liLogo} alt="Linkedin logo" />
        </a>
        <a
          href="https://twitter.com/chris_k_dev"
          className="rounded-full mx-2 transition-transform transform hover:scale-110 active:scale-95"
          target="_blank"
          rel="noreferrer"
        >
            <img className="w-8" src={twitterLogo} alt="Twitter logo" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
