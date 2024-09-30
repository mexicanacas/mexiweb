import { AlbumCover } from './AlbumCover';
import { AlbumInfo } from './AlbumInfo';

const ElPeTracks = [
  'Yo Soy El Aventurero',
  "Livin' la Vida Loca",
  '¡Aserejito!',
];

const DiegoTracks = ['Diego Licarno (Viva Mæxico)'];

const PlataTracks = [
  'Fireball (feat. Flo Ryan)',
  'Yo No Sé',
  "Gasolina (feat. Lil' Jake)",
];

const MexTapeTracks = ['Pinne for Mexico', 'Taco Shell', 'Samba of Silence'];

export const Albums = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl">Utgivelser</h2>
      <div className="grid grid-cols-1 items-center justify-items-center gap-4 p-4 md:grid-cols-2">
        <AlbumCover
          src="/el-pe-cover.jpg"
          alt="Cover for utgivelsen El Pé"
          credit="Grafikk av Lovinda Ødegården"
          href="https://open.spotify.com/album/5YksxKdjfI0cBAMkwWLLkQ?si=B3EP0nRlRkugiLFoqJmdzw"
        />
        <AlbumInfo title="El Pé - 2021" tracks={ElPeTracks} />
        <AlbumCover
          src="/diego-cover.jpg"
          alt="Cover for utgivelsen Diego Licarno"
          credit="Tegning av Gabriel Konupek With"
          href="https://open.spotify.com/album/5I2j5UPKxM1VBdj0c2agOM?si=0WPjoDhLS62x1cXijEoW9g"
        />
        <AlbumInfo title="Diego Licarno - 2022" tracks={DiegoTracks} />
        <AlbumCover
          src="/plata-cover.png"
          alt="Cover for utgivelsen Plata"
          credit="Grafikk av Ole Bøe Andreasen"
          href="https://open.spotify.com/album/5I2j5UPKxM1VBdj0c2agOM?si=0WPjoDhLS62x1cXijEoW9g"
        />
        <AlbumInfo title="Plata - 2023" tracks={PlataTracks} />
      </div>
    </div>
  );
};
