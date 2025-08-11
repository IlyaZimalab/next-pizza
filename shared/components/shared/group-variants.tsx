'use client';

import { cn } from '@/shared/lib/utils';

export type Variant = {
  name: string;
  value: string;
  disabled? : boolean;
};

interface Props {
  items: readonly Variant[];
  onClick?: (value: Variant['value']) => void;
  value?: Variant['value'];
  className?: string;
}

export const GroupVariants = ({
  items,
  className,
  onClick,
  value,
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
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow pointer-events-none':
                item.value === value,
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
