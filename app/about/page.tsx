import { BackgroundImage } from '../core/components/BackgroundImage';
import { Albums } from './components/Albums';
import { InfoText } from './components/InfoText';

const About = () => (
  <>
    <BackgroundImage alt="Mexicanacas" src="/album-image.jpg" />
    <div className="text-secondary flex flex-col items-center gap-4 pt-header md:pt-logo-big">
      <InfoText />
      <Albums />
    </div>
  </>
);

export default About;
