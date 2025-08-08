'use client';

import { cn } from '@/lib/utils';

type Variant = {
  name: string;
  value: string;
  disabled: boolean;
};

interface Props {
  items: readonly Variant[];
  onClick?: (value: Variant['value']) => void;
  selectedValue?: Variant['value'];
  className?: string;
}

export const GroupVariants = ({
  items,
  className,
  onClick,
  selectedValue,
}: Props) => {
  return (
    <div
      className={cn(
        'flex justify-between bg-gray-100 rounded-3xl p-1 select-none'
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          // onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm",
            {
              'bg-white shadow pointer-events-none': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
