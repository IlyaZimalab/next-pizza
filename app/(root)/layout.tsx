import type { Metadata } from 'next';
import { Header } from '@/shared/components/shared/header';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Next Pizza | Home',
  description: 'Making delishious Pizza',
};

export default async function HomeLayout({
  modal,
  children,
}: Readonly<{
  modal: ReactNode;
  children: ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {modal}
      {children}
    </main>
  );
}
