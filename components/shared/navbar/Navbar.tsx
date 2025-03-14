'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';
import Theme from '@/components/shared/navbar/Theme';
import MobileNav from '@/components/shared/navbar/MobileNav';
import GlobalSearch from '@/components/shared/search/GlobalSearch';

function Navbar() {
    return (
        <nav className="
         flex-between background-light900_dark200
         fixed z-50 w-full gap-5 p-6
         shadow-light-300 dark:shadow-none
         sm:px-12"
        >
            <Link href="/" className="flex items-center gap-1">
                <Image src="/assets/images/site-logo.svg" alt="Site logo" width="23" height="23" />
                <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                    Over
                    <span className="text-primary-500">flow</span>
                </p>
            </Link>

            <GlobalSearch />

            <div className="flex-between gap-5">
                <Theme />
                <SignedIn>
                    <UserButton appearance={{
                        elements: {
                            avatarBox: 'h-10 w-10',
                        },
                        variables: {
                            colorPrimary: '#ff7000',
                        },
                    }}
                    />
                </SignedIn>

                <MobileNav />
            </div>
        </nav>
    );
}

export default Navbar;
