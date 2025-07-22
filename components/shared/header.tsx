import React from 'react'
import Image from 'next/image';

import { Container } from './container';
import { cn } from '@/lib/utils';
import { Button } from '../ui';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
        <Container className='flex items-center justify-between py-8'>
            {/* Left side */}
            <div className='flex items-center gap-4'>
                <Image src='/assets/images/logo.png' alt='Logo' width={35} height={35}/>
                <div>
                    <h1 className='text-2xl uppercase font-black'>Next pizza</h1>
                    <p className='text-sm text-gray-400 leading-3'>It couldn&#39;t be tastier</p>
                </div>
            </div>
            <div>
                <Button variant={'outline'}>Sign in</Button>
            </div>
        </Container>
    </header>
  );
};