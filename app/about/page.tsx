import { CreditAndre } from '../core/components/CreditAndre';
import { Albums } from './components/Albums';
import { BackgroundImage } from '../core/components/BackgroundImage';
import { InfoText } from './components/InfoText';

const About = () => (
  <div>
    <BackgroundImage alt="Mexicanacas" src="/album-image.jpg" />
    <div className="full-page-component justify-around pt-header md:pt-logo-big">
      <div className="bg-mexi-black bg-opacity-50">
        <InfoText />
        <Albums />
        <CreditAndre />
      </div>
    </div>
  </div>
);

export default About;
