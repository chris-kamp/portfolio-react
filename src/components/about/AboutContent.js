import Bio from "./Bio";
import Card from "./Card";
import TechStack from "./TechStack";

const AboutContent = () => {
  return (
    <main className="flex flex-col items-center w-full px-3 lg:flex-row lg:justify-center lg:flex-wrap xl:flex-nowrap sm:px-12 xl:items-stretch">
      <div className="w-full max-w-2xl lg:max-w-none xl:max-w-2xl xl:w-4/12 lg:mr-4 xl:mr-0">
        <Card heading="BIO">
          <Bio />
        </Card>
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row xl:w-8/12">
        <Card heading="TECH STACK" middle={true}>
          <TechStack />
        </Card>
        <Card heading="HISTORY">
          <TechStack />
        </Card>
      </div>
    </main>
  );
};

export default AboutContent;
