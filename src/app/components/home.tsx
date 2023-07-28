import * as React from 'react';

export interface HomeContainerProps {
  children: React.ReactElement | React.ReactElement[]
}

export function HomeContainer({ children }: HomeContainerProps) {
  return (
    <div className='flex gap-12 ml-auto w-full max-w-homeCalc bg-red-600'>
      {children}
    </div>
  );
}
