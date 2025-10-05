import { CreditAndre } from '../core/components/CreditAndre';
import { Social } from '../home/components/Social';

export const Footer = () => (
  <footer className="flex w-full flex-wrap items-center justify-between gap-4 bg-secondary p-8">
    <div className="flex flex-col">
      <h2 className="text-lg font-bold">Kontakt oss</h2>
      <ul>
        <li>
          <a
            className="underline hover:text-primary/80"
            href="mailto:booking@mexi.no"
          >
            booking@mexi.no
          </a>
        </li>
      </ul>
      <CreditAndre />
    </div>
    <Social />
  </footer>
);
