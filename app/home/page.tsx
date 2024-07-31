import { Social } from './components/Social';
import { PromoVideo } from './components/PromoVideo';

import { CreditAndre } from '../core/components/CreditAndre';
import { BackgroundImage } from '../core/components/BackgroundImage';
import { ConcertPromo } from './components/ConcertPromo';

export default function Home() {
  return (
    <div>
      <BackgroundImage alt="Mexicanacas" src="/homepage-image.jpg" />
      <div className="full-page-component justify-end p-12">
        <CreditAndre />
        <Social />
        <ConcertPromo />
      </div>
      <PromoVideo />
    </div>
  );
}
