import React from 'react';

function Layout({ children }: {children: React.ReactNode}) {
    return <div className="flex min-h-screen w-full items-center justify-center ">{children}</div>;
}

export default Layout;
