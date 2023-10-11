import React from 'react';

const Layout = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
}) => {
  return (
    <div
      className='bg-background flex min-h-screen flex-col'
      style={{ paddingTop: `calc(env(safe-area-inset-top) + 58px)`, ...style }}
    >
      {children}
    </div>
  );
};

export default Layout;
