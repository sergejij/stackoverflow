'use client';

import { UserButton } from '@clerk/nextjs';
import { useTheme } from '@/context';

export default function Home() {
    const { mode, handleThemeChange } = useTheme();
    return (
        <div>
            <UserButton />
            {mode}
            <button onClick={() => handleThemeChange()}>change color</button>
        </div>
    );
}
