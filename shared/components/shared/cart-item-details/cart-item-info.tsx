import { cn } from "@/shared/lib/utils";

interface Props {
  name: string;
  details: string;
  classname?: string;
}

export const CartItemInfo = ({
  name,
  details,
  classname,
}: Props) => {
  return (
    <div className={cn('', classname)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details && (
        <p className="text-xs text-gray-400">{details}</p>
      )}
    </div>
  );
};
