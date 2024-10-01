import { Social } from './components/Social';
import { PromoVideo } from './components/PromoVideo';

import { ConcertPromo } from './components/ConcertPromo';
import Image from 'next/image';
import { IntroText } from './components/IntroText';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-fit w-full">
        <Image
          alt="Mexicanacas"
          src="/homepage-image.jpg"
          quality={100}
          width={100}
          height={100}
          style={{
            width: '100%',
          }}
          sizes="100%"
        />
      </div>
      <div className="flex w-full max-w-screen-md flex-col gap-8 p-12">
        <IntroText />
        <ConcertPromo />
        <Social />
      </div>
      <PromoVideo />
    </div>
  );
}
