import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { Container, ProductImage, Title } from '@/components/shared';

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) return notFound();

  return (
    <Container className="flex flex-col my-2">
      <div className='flex flex-1'>
        <ProductImage imageUrl={product.imageUrl} size={40} />
        <div className='w-[450px] bg-accent p-7'>
          <Title text={product.name} size='md' className='font-extrabold md-1'/>
          <p className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, laborum similique ullam velit soluta, eum voluptatibus voluptatem aliquid in maxime adipisci amet.</p>
        </div>
      </div>
    </Container>
  );
}
