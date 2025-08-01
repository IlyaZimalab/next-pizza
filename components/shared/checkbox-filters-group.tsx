'use client';

import { useState } from 'react';
import { Input, Skeleton } from '../ui';
import { FilterCheckbox, type FilterCheckboxProps } from './filter-checkbox';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (values: string) => void;
  defaultValues?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup = ({
  className,
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onClickCheckbox,
  selected,
  name,
  defaultValues,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (e: string) => {
    setSearchInput(e);
  };

  if (items.length < 1) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        
        {Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-3 w-full rounded-[8px]" />)}
        <Skeleton className="h-6 mb-3 w-28 rounded-[8px]" />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchInput.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => handleSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            name={name}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3 cursor-pointer"
          >
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
