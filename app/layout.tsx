import { Nunito } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}