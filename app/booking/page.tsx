import Image from 'next/image';
import { BackgroundImage } from '../core/components/BackgroundImage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking | Los Mexicanacas',
  description:
    'Book Los Mexicanacas for ditt neste arrangement! Vi spiller på bryllup, firmafester, bursdager og konferanser. Vi sparker i gang festen din og lager god stemning på alle typer arrangementer.',
  keywords:
    'festband, bryllup musikk, firmafest underholdning, bursdagsband, konferanse musikk, party band Norge, live musikk arrangement, pop-up band, sommerfest underholdning, jobbfest band, julebord musikk, event band booking, mariachi band Norge, firmaevent, bedriftsarrangement, teambuilding musikk, underholdning til firmafest, musikk til kickoff, band til sommerfest bedrift, band til julebord bedrift, bedriftsfest underholdning, eventbyrå musikk, live musikk bedrift',
};

const Booking = () => {
  return (
    <>
      <BackgroundImage alt="Mexicanacas" src="/booking-image.jpg" />
      <div className="mt-header flex min-h-screen flex-col items-center pb-4 text-secondary md:mt-0 md:flex-row md:px-20">
        <section className="mx-auto flex max-w-screen-lg flex-col gap-4 bg-mexi-black bg-opacity-50 p-4 md:mt-0">
          <h1 className="text-2xl md:text-4xl">Booking</h1>
          <p>
            Los Mexicanacas er bandet som spiller opp til fest hvor som helst og
            for hvem som helst! Vi spiller i bryllup og bursdager, på
            firmafester og store konferanser. Ingen scene er verken for liten
            eller stor for oss.
          </p>
          <p>
            Vi er i dag rundt 30 aktive medlemmer, og kan stille opp som alt fra
            kvintetter (5 personer) til fullt band &ndash; men på de fleste
            spilleoppdrag er vi cirka 12 deltakere. <br />
            Som oftest dukker vi opp som et pop-up-band med egne trådløse
            forsterkere, og spiller i typisk 20 minutter, for å sparke i gang en
            fest. Andre ganger har vi et lengre konsertsett med lydprøve i
            forkant.
          </p>
          <p>
            Uansett, så er vi fleksible og har lang erfaring med å tilpasse oss
            ditt arrangement og deres ønsker. <br />
            Kontakt oss på{' '}
            <a
              href="mailto:booking@mexi.no"
              className="underline hover:text-secondary/80"
            >
              booking@mexi.no
            </a>{' '}
            for et uforpliktende tilbud eller en prat om ditt neste event!
          </p>
          <p>Vi gleder oss til å høre fra deg 🎉</p>
        </section>
      </div>
    </>
  );
};

export default Booking;
