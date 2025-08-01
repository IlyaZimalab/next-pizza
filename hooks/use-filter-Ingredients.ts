import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useEffect, useState } from 'react';
// import { useSet } from 'react-use';

interface ReturnProps {
    ingredients: Ingredient[];
    // selectedId: Set<string>;
    // onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // const [selectedId, { toggle }] = useSet(new Set<string>([]))

  useEffect(() => {
    async function fetchIngredients() {
        try {
            const ingredients = await Api.ingredients.getAll();
            setIngredients(ingredients)
        } catch(error) {
            console.error(error)
        }
    }

    fetchIngredients()
  }, []);
  return { ingredients };
};
