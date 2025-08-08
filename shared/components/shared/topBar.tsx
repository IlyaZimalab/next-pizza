import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Category } from '@prisma/client';

interface Props {
  className?: string;
  categories: Category[];
}

export const TopBar = ({ categories, className }: Props) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className
      )}
    >
      <Container className="flex justify-between">
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
