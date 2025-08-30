import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import DisplayLayout from '@/layouts/display-layout';
import { BanknoteIcon, HandCoinsIcon, MessageCircleQuestionIcon, PiggyBankIcon } from 'lucide-react';
import { useState } from 'react';

const services = [
    { id: 1, name: 'Customer Service', icon: MessageCircleQuestionIcon },
    { id: 2, name: 'Teller', icon: HandCoinsIcon },
    { id: 3, name: 'Account Opening', icon: PiggyBankIcon },
    { id: 4, name: 'Loan Services', icon: BanknoteIcon },
];

export default function Kiosk({ csrf }: { csrf: string }) {
    const [queueNumber, setQueueNumber] = useState<string | null>(null);

    const handleGetQueue = async (serviceId?: number) => {
        const response = await fetch('/kiosk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrf,
            },
            body: JSON.stringify({
                service_id: serviceId,
            }),
        });

        const data = await response.json();
        console.log(data.number);
        setQueueNumber(data.number);
    };

    return (
        <DisplayLayout>
            <div className="flex w-full max-w-6xl flex-col items-center justify-center p-8 text-center sm:p-12 lg:p-16">
                <header className="mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">Welcome to the Queue</h1>
                    <p className="mt-4 text-lg text-white/80 sm:text-xl">Please select the service you need.</p>
                </header>
                {!queueNumber ? (
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service) => (
                            <Button
                                className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-xl border border-white/10 bg-[#161615] p-8 text-white shadow-xl transition-all hover:scale-[1.02] hover:bg-[#1C1C1A] focus:ring-4 focus:ring-blue-500/50 focus:outline-none"
                                key={service.id}
                                onClick={() => handleGetQueue(service.id)}
                            >
                                <div className="size-20">
                                    <Icon iconNode={service.icon} className="size-full animate-pulse text-[#60A5FA]" />
                                </div>
                                <span className="text-2xl font-semibold sm:text-xl lg:text-2xl">{service.name}</span>
                            </Button>
                        ))}
                    </div>
                ) : (
                    <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#161615] p-12 shadow-2xl backdrop-blur-md">
                        <h2 className="text-3xl font-bold text-white/90 sm:text-4xl">Your Queue Number</h2>
                        <div className="my-8 text-8xl font-black text-[#60A5FA] drop-shadow-lg sm:text-9xl lg:text-[10rem]">{queueNumber}</div>
                        <p className="text-xl text-white/70">Please wait until your number is called.</p>
                        <Button
                            onClick={() => setQueueNumber(null)}
                            className="mt-8 rounded-lg border-2 border-[#60A5FA] bg-transparent px-6 py-4 text-white hover:bg-[#60A5FA] hover:text-white"
                        >
                            Get a new number
                        </Button>
                    </div>
                )}
            </div>
        </DisplayLayout>
    );
}
