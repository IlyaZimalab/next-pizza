import { cn } from '@/shared/lib/utils';

interface Props {
  src: string;
  className?: string;
}

export const CartItemDetailsImage = ({ src, className }: Props) => {
  return <img src={src} className={cn('w-[60px] h-[60px]', className)} />;
};
