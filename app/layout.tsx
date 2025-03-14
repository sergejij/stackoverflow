import { ClerkProvider } from '@clerk/nextjs';
import React from 'react';
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
    title: 'Overflow',
    description:
        'A community-driven platform for asking and answering the programming questions.',
    icons: {
        icon: '/assets/images/site-logo.svg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider
            appearance={{
                elements: {
                    formButtonPrimary: 'primary-gradient',
                    footerActionText: 'primary-text-gradient hover:text-primary-500',
                },
            }}
        >
            <html lang="en">
                <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
