import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
    const ingredients = await prisma.ingredient.findMany();
    return NextResponse.json(ingredients);
}