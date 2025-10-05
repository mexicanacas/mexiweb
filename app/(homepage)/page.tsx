import Home from './/home/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Los Mexicanacas | Norges grandeste og strammeste partyband!',
  description:
    'Vi er Los Mexicanacas og leverer live musikk, god stemning og fiestagaranti til alle typer arrangementer, fra bryllup og firmafester til bursdager og konserter.',
};

export default function App() {
  return <Home />;
}
