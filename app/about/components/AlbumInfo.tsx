import { FC } from 'react';

type Props = {
  title: string;
  tracks: string[];
};

export const AlbumInfo: FC<Props> = ({ title, tracks }) => (
  <section className="flex flex-col justify-center p-4">
    <h2 className="text-lg font-medium">{title}</h2>
    <ol>
      {tracks.map((track) => (
        <li key={track}>
          <h3>{track}</h3>
        </li>
      ))}
    </ol>
  </section>
);
