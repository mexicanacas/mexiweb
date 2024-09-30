import { CreditAndre } from '../core/components/CreditAndre';
import { Social } from '../home/components/Social';

export const Footer = () => (
  <footer className="bg-secondary flex w-full items-center justify-between p-8">
    <div className="flex flex-col">
      <h2 className="text-lg font-bold">Kontakt oss</h2>
      <ul>
        <li>
          <a className="underline" href="mailto:oslo@mexi.no">
            oslo@mexi.no
          </a>
        </li>
        <li>
          <a className="underline" href="mailto:trondheim@mexi.no">
            trondheim@mexi.no
          </a>
        </li>
      </ul>
      <CreditAndre />
    </div>
    <Social />
  </footer>
);
