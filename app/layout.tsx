/* eslint-disable @next/next/no-sync-scripts */
import React, { FC, ReactNode } from 'react';

import './globals.css';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="no">
      <head>
        <title>Mexi</title>
        <script
          src="https://kit.fontawesome.com/701c0b74f9.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Header />
        <main className="min-w-screen min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
