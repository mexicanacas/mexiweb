import '../globals.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        <Header />
        <main className="min-h-screen min-w-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
