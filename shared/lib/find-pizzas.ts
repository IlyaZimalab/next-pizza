import { prisma } from '@/prisma/prisma-client';

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  pizzaTypes?: string;
  selectedIngredients?: string;
  priceFrom?: string;
  priceTo?: string;
}

const DEFAULT_PRICE_FROM = 0;
const DEFAULT_PRICE_TO = 1000;

export const findPizzas = async (params: GetSearchParams) => {
  const selectedIngredients = params.selectedIngredients
    ?.split(',')
    .map(Number);
  const sizes = params.sizes?.split(',').map(Number);
  const pizzaTypes = params.pizzaTypes?.split(',').map(Number);

  const priceFrom = Number(params.priceFrom) || DEFAULT_PRICE_FROM;
  const priceTo = Number(params.priceTo) || DEFAULT_PRICE_TO;

  const categories = await prisma.category.findMany({
    include: {
      products: {
        orderBy: {
          id: 'desc',
        },
        where: {
          ingredients: selectedIngredients
            ? {
                some: {
                  id: {
                    in: selectedIngredients,
                  },
                },
              }
            : undefined,
          items: {
            some: {
              size: {
                in: sizes,
              },
              pizzaType: {
                in: pizzaTypes,
              },
              price: {
                gte: priceFrom,
                lte: priceTo,
              }
            },
          },
        },
        include: {
          ingredients: true,
          items: {
            where: {
              price: {
                gte: priceFrom,
                lte: priceTo,
              }
            },
            orderBy: {
              price: 'asc',
            }
          },
        },
      },
    },
  });

  return categories;
};
