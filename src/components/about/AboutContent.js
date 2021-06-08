import Bio from "./Bio";
import Card from "./Card";
import TechStack from "./TechStack";

const AboutContent = () => {
  return (
    <main className="flex flex-col items-center w-full px-3 lg:flex-row lg:justify-center lg:flex-wrap sm:p-12">
      <div className="w-full max-w-2xl lg:max-w-none lg:mr-4">
        <Card heading="BIO">
          <Bio />
        </Card>
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row">
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
