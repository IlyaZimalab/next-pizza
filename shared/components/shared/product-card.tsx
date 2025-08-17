import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[]
  className?: string;
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}: Props) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-primary-foreground rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="md" className="font-semibold" />
        <p className="text-sm text-gray-400">{ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-[20px] ">от <b>{price} ₽</b></span>
          <Button variant="secondary" className='bg-primary-foreground'>
            <Plus size={20}/>
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
