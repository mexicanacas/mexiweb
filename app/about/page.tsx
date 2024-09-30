import { Albums } from './components/Albums';
import { BackgroundImage } from '../core/components/BackgroundImage';
import { InfoText } from './components/InfoText';

const About = () => (
  <div>
    <div className="full-page-component justify-around pt-header md:pt-logo-big">
      <div>
        <InfoText />
        <Albums />
      </div>
    </div>
  </div>
);

export default About;
