import * as React from 'react';

export interface ProductProps {
  children: React.ReactElement | React.ReactElement[]
}

export function Product({ children }: ProductProps) {
  return (
    <div
      className='keen-slider__slide group overflow-hidden bg-gradient-to-b from-greenGradient to-blueGradient rounded-lg 
      cursor-pointer relative flex items-center justify-center'
    >
      {children}
    </div>
  );
}
