import Bio from "./Bio";
import Card from "./Card";
import History from "./History";
import TechStack from "./TechStack";

const AboutContent = () => {
  return (
    <main className="grid w-full grid-cols-1 gap-4 px-3 md:grid-cols-2 xl:grid-cols-3 xs:gap-6 sm:gap-8 sm:px-12">
      <Card heading="BIO" first={true}>
        <Bio />
      </Card>
      <Card heading="TECH STACK">
        <TechStack />
      </Card>
      <Card heading="HISTORY">
        <History />
      </Card>
    </main>
  );
};

export default AboutContent;
