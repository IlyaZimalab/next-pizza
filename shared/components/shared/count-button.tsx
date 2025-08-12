import { cn } from '@/shared/lib/utils';
import { CountIconButton } from '.';

export interface Props {
  value?: number;
  size?: 'sm' | 'lg';
  className?: string;
  onClick?: (type: 'plus' | 'minus') => void;
}

export const CountButton = ({ value = 1, size = 'sm', onClick, className }: Props) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-between gap-3',
        className
      )}
    >
      <CountIconButton
        onClick={() => onClick?.('minus')}
        disabled={value === 1}
        size={size}
        type="minus"
      />
      <b className={size === 'sm' ? 'text-sm' : 'text-md'}>{value}</b>
      <CountIconButton
        onClick={() => onClick?.('plus')}
        size={size}
        type="plus"
      />
    </div>
  );
};
