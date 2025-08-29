import { type PropsWithChildren } from 'react';
const home = () => '/';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title, description }: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="queue-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 0 5 L 10 5" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#queue-pattern)" />
                </svg>
            </div>

            <div className="relative z-10 w-full max-w-sm">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col items-center gap-4 text-center">
                        <a href={home()} className="flex flex-col items-center gap-2">
                            <svg
                                className="h-16 w-16 text-blue-600 dark:text-blue-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 12h2v5H9zM13 7h2v5h-2z" />
                            </svg>
                            <span className="sr-only">{title}</span>
                        </a>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
