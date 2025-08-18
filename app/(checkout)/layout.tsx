import type { Metadata } from 'next';
import { Header } from '@/shared/components/shared/header';
import { ReactNode } from 'react';
import { Container } from '@/shared/components/shared';

export const metadata: Metadata = {
  title: 'Next Pizza | Корзина',
  description: 'Making delishious Pizza',
};

export default async function CheckoutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#F4F1EE]">
      <Container>
        <Header
          hasSearch={false}
          hasCart={false}
          className="border-b-gray-200"
        />
        {children}
      </Container>
    </main>
  );
}
