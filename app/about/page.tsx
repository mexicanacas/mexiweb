import { Albums } from './components/Albums';
import { InfoText } from './components/InfoText';

const About = () => (
  <div className="justify-around pt-header md:pt-logo-big">
    <div>
      <InfoText />
      <Albums />
    </div>
  </div>
);

export default About;
