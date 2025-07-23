import { Container, Title, TopBar, Filters } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold"/>
      </Container>
      <TopBar />
      <Container className="pb-14px mt-10" >
        <div className="flex gap-[60px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">Orders list</div>
          </div>
        </div>
      </Container>
    </>
  );
}
