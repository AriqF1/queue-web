import { Head } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default ({ children }: Props) => {
    return (
        <>
            <Head title="Queue Display">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700,800" rel="stylesheet" />
            </Head>

            <main className="min-h-screen grid-cols-3 gap-8 px-12">{children}</main>
        </>
    );
};
