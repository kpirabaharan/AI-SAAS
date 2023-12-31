'use client';

import { MenuIcon, XIcon } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/ui/motion-div';

interface NavbarButtonProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const NavbarButton = ({ isActive, setIsActive }: NavbarButtonProps) => {
  return (
    <Button
      className={`pointer-events-auto absolute left-0 top-0 overflow-hidden`}
      variant={'default-no-hover'}
      size={'icon'}
      onClick={() => setIsActive(!isActive)}
    >
      <MotionDiv
        className='relative h-full w-full'
        animate={{ top: isActive ? '-100%' : 0 }}
        transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className='flex h-full w-full items-center justify-center'>
          <MenuIcon className='h-5 w-5 md:h-auto md:w-auto' />
        </div>
        <div className='flex h-full w-full items-center justify-center'>
          <XIcon className='h-5 w-5 md:h-auto md:w-auto' />
        </div>
      </MotionDiv>
    </Button>
  );
};

export default NavbarButton;
