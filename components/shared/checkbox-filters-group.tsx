'use client'

import { ChangeEvent, useState } from "react";
import { Input } from "../ui";
import { FilterCheckbox, type FilterCheckboxProps } from "./filter-checkbox";

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValues?: string[];
    className?: string;
}

export const CheckboxFiltersGroup = ({ 
    className, 
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Search...', 
    onChange
}:Props) => {
    const [showAll, setShowAll] = useState(false);
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInput = (e: string) => {
      setSearchInput(e)
    }

    const list = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchInput.toLowerCase())) : defaultItems?.slice(0, limit);
    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>
            {showAll && (
                <div className="mb-5">
                    <Input onChange={(e) => handleSearchInput(e.target.value)} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none"/>
                </div>
            )}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, index) => (
                    <FilterCheckbox 
                        key={index}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ids) => console.log(ids)} 
                    />
                ))}
            </div>
            {items.length > limit && (
                <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
                    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3 cursor-pointer">
                        {showAll ? 'Hide' : '+ Show all'}
                    </button>
                </div>
            )}
        </div>
  )
}
