import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default ({ children }: Props) => {
    return (
        <>
            <Head title="Queue Display" />
            <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-12 text-white before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_center,_#2c2c2a_0%,_transparent_60%)]">
                {children}
            </main>
        </>
    );
};
