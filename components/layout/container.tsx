import React from 'react';
import { type FC, type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`md:max-w-[88.533%] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
