'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';

interface Props {
  classname?: string;
  categories: Category[];
}

export const Categories = ({ categories, classname }: Props) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', classname)}
    >
      {categories.map(({ id, name }) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5 cursor-pointer',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-200 text-primary cursor-default'
          )}
          href={`/#${name}`}
          key={id}
        >
          <button
            className={cn(
              categoryActiveId !== id ? 'cursor-pointer' : 'cursor-default'
            )}
          >
            {name}
          </button>
        </a>
      ))}
    </div>
  );
};
