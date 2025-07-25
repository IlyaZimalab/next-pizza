'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  classname?: string;
}

const categories = [
    {
        id: 1,
        name: 'Pizzas',
    },
    {
        id: 2,
        name: 'Combos',
    },
    {
        id: 3,
        name: 'Snacks',
    },
    {
        id: 4,
        name: 'Cocktails',
    },
    {
        id: 5,
        name: 'Coffee',
    },
    {
        id: 6,
        name: 'Drinks',
    },
    {
        id: 7,
        name: 'Desserts',
    }
];

export const Categories = ({ classname }: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', classname)}
    >
      {categories.map(({id, name}) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary cursor-default'
          )}
          href={`/#${name}`}
          key={id}
        >
          <button className={cn(categoryActiveId !== id ? 'cursor-pointer' : 'cursor-default')}>{name}</button>
        </a>
      ))}
    </div>
  );
};
