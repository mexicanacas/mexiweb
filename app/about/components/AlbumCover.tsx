import Image from 'next/image';
import { FC } from 'react';

type Props = Pick<HTMLImageElement, 'src' | 'alt'> &
  Pick<HTMLAnchorElement, 'href'> & {
    credit: string;
  };

export const AlbumCover: FC<Props> = ({ src, alt, href, credit }) => (
  <section className="flex flex-col items-center">
    <a href={href}>
      <Image
        src={src}
        alt={alt}
        height="250"
        width="250"
        className="shadow-md"
      />
    </a>
    <p>{credit}</p>
  </section>
);
