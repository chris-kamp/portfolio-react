import Bio from "./Bio";
import Card from "./Card";
import TechStack from "./TechStack";

const AboutContent = () => {
  return (
    <main className="flex flex-col items-center w-full px-3 sm:p-12">
      <Card heading="BIO">
        <Bio />
      </Card>
      <Card heading="TECH STACK">
        <TechStack />
      </Card>
      <Card heading="HISTORY">
        <TechStack />
      </Card>
    </main>
  );
};

export default AboutContent;
