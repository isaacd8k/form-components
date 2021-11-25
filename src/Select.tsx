import React, { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export const Select = ({children, ...props}: Props) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}
