import * as React from 'react';

export interface ProductProps {
  children: React.ReactElement | React.ReactElement[]
}

export function Product({ children }: ProductProps) {
  return (
    <div>
      {children}
    </div>
  );
}
