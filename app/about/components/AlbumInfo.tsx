import { FC } from 'react';

type Props = {
  title: string;
  tracks: string[];
};

export const AlbumInfo: FC<Props> = ({ title, tracks }) => (
  <section className="flex flex-col justify-center justify-self-start  bg-mexi-black bg-opacity-50 p-4">
    <h3 className="text-lg font-medium">{title}</h3>
    <ol>
      {tracks.map((track) => (
        <li key={track}>
          <h3>{track}</h3>
        </li>
      ))}
    </ol>
  </section>
);
