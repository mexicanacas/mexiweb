import Image from 'next/image';
import { BackgroundImage } from '../core/components/BackgroundImage';

const Booking = () => {
  return (
    <>
      <BackgroundImage alt="Mexicanacas" src="/booking-image.jpg" />
      <div className="text-secondary mt-header flex min-h-screen flex-col items-center pb-4 md:mt-0 md:flex-row md:px-20">
        <section className="mx-auto flex max-w-screen-lg flex-col gap-4 bg-mexi-black bg-opacity-50 p-4 md:mt-0">
          <h1 className="text-2xl md:text-4xl">Booking</h1>
          <p>
            De siste årene har Los Mexicanacas spilt på bryllup, firmafester,
            bursdager og konferanser. Vi er sultne på mer, da vi sparer opp til
            den store Mexico-turnéen en gang i en lys fremtid.
          </p>
          <p>
            Vi er ca. 30 aktive medlemmer, og kan spille alt fra kvintetter (5
            personer) til fullt band / orkester. På de fleste spilleoppdrag er
            vi ca. 9 - 14 deltakere. Vanligvis er vi et pop-up-band med trådløse
            forsterkere, og spiller i typisk 15 - 20 minutter, ofte for å sparke
            i gang en fest. Andre ganger har vi full lydprøve med konsert-rigg.
          </p>
          <p>
            Kontakt oss på{' '}
            <a className="underline" href="mailto:oslo@mexi.no">
              oslo@mexi.no
            </a>{' '}
            eller{' '}
            <a className="underline" href="mailto:trondheim@mexi.no">
              trondheim@mexi.no
            </a>{' '}
            avhengig av hvor oppdraget finner sted.
          </p>
        </section>
      </div>
    </>
  );
};

export default Booking;
