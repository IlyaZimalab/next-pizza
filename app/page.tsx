import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14px mt-10">
        <div className="flex gap-[80px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters className='my-5'/>
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                categoryId={1}
                title='Pizzas'
                items={[
                  {
                    id: 1,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 2,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 3,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 4,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 5,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 6,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                ]}
              />
              <ProductsGroupList 
                categoryId={2}
                title='Combos'
                items={[
                  {
                    id: 1,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 2,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 3,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 4,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 5,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 6,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                ]}
              />
                            <ProductsGroupList 
                categoryId={3}
                title='Snacks'
                items={[
                  {
                    id: 1,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 2,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 3,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 4,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 5,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                  {
                    id: 6,
                    price: 550,
                    name: "Margarita",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                    items: [{price: 550}, {price: 750}]
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
