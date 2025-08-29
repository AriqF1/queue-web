import { Head } from '@inertiajs/react';

const dashboard = () => '/dashboard';
const login = () => '/login';
const register = () => '/register';
const usePage = () => ({ props: { auth: { user: null } } });

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Welcome to Queue" />
            <div className="flex min-h-screen flex-col items-center bg-gray-50 p-4 font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
                <header className="flex w-full max-w-7xl justify-end px-4 py-6">
                    <nav className="flex items-center gap-4">
                        {auth.user ? (
                            <a
                                href={dashboard()}
                                className="rounded-lg bg-gray-100 px-5 py-2 font-medium text-gray-800 transition-colors duration-300 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                                Dashboard
                            </a>
                        ) : (
                            <>
                                <a
                                    href={login()}
                                    className="rounded-lg border-1 border-white px-5 py-2 text-gray-600 transition-colors duration-300 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                                >
                                    Log in
                                </a>
                                <a
                                    href={register()}
                                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white shadow-md transition-colors duration-300 hover:bg-blue-700"
                                >
                                    Register
                                </a>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content Hero Section */}
                <main className="flex w-full max-w-7xl flex-1 flex-col-reverse items-center justify-center gap-12 p-8 lg:flex-row lg:p-12">
                    {/* Text Content */}
                    <div className="max-w-2xl flex-1 text-center lg:text-left">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">
                            Queue It Up. <br className="hidden md:inline" /> Ship It Out.
                        </h1>
                        <p className="mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-400">
                            Streamline your workflow and prioritize tasks with a simple, visual queue management system.
                        </p>
                        <a
                            href={auth.user ? dashboard() : register()}
                            className="inline-block transform rounded-xl bg-blue-600 px-8 py-3 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
                        >
                            {auth.user ? 'Go to Dashboard' : 'Get Started for Free'}
                        </a>
                    </div>

                    {/* Visual SVG */}
                    <div className="w-full max-w-md flex-1 lg:max-w-xl">
                        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full rounded-lg bg-gray-100">
                            {/* Base queue path */}
                            <path
                                d="M 50 150 C 150 50, 350 50, 450 150"
                                fill="none"
                                stroke="#60A5FA"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeDasharray="10 10"
                            />

                            {/* Queue Items (circles) */}
                            <circle cx="50" cy="150" r="20" fill="#3B82F6" className="animate-fade-in-1" />
                            <circle cx="150" cy="90" r="20" fill="#3B82F6" className="animate-fade-in-2" />
                            <circle cx="250" cy="70" r="20" fill="#3B82F6" className="animate-fade-in-3" />
                            <circle cx="350" cy="90" r="20" fill="#3B82F6" className="animate-fade-in-4" />
                            <circle cx="450" cy="150" r="20" fill="#3B82F6" className="animate-fade-in-5" />

                            {/* Animated dot moving along the path */}
                            <circle cx="0" cy="0" r="8" fill="#D97706">
                                {/* The animateMotion tag animates the circle along the SVG path */}
                                <animateMotion dur="5s" repeatCount="indefinite" path="M 50 150 C 150 50, 350 50, 450 150" />
                            </circle>
                        </svg>
                    </div>
                </main>

                <style>
                    {`
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in-1 { animation: fade-in 0.5s ease-out 0.2s forwards; opacity: 0; }
                    .animate-fade-in-2 { animation: fade-in 0.5s ease-out 0.4s forwards; opacity: 0; }
                    .animate-fade-in-3 { animation: fade-in 0.5s ease-out 0.6s forwards; opacity: 0; }
                    .animate-fade-in-4 { animation: fade-in 0.5s ease-out 0.8s forwards; opacity: 0; }
                    .animate-fade-in-5 { animation: fade-in 0.5s ease-out 1s forwards; opacity: 0; }
                    `}
                </style>
            </div>
        </>
    );
}
