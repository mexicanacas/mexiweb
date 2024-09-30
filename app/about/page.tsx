import { Albums } from './components/Albums';
import { InfoText } from './components/InfoText';

const About = () => (
  <div className="flex flex-col items-center pt-header md:pt-logo-big">
    <InfoText />
    <Albums />
  </div>
);

export default About;
