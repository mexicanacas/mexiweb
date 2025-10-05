import { BackgroundImage } from '../core/components/BackgroundImage';
import { Albums } from './components/Albums';
import { InfoText } from './components/InfoText';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss | Los Mexicanacas',
  description:
    'Bli kjent med Los Mexicanacas! Les om bandets historie og våre utgivelser. Se bilder og album fra våre eventyr.',
};

const About = () => (
  <>
    <BackgroundImage alt="Mexicanacas" src="/album-image.jpg" />
    <div className="flex flex-col items-center gap-4 pt-header text-secondary md:pt-logo-big">
      <InfoText />
      <Albums />
    </div>
  </>
);

export default About;
