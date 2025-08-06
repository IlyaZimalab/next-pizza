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
    ></div>
  );
};
