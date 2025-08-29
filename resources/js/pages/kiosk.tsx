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
            <header className="mt-12 text-center">
                <p className="text-2xl font-semibold text-white/80">Welcome to</p>
                <h1 className="mb-18 text-4xl font-bold text-white">Bank Central Asia</h1>
            </header>
            <div className="mx-auto w-full max-w-6xl">
                {!queueNumber ? (
                    <div className="rounded-lg bg-white p-8 shadow-2xl">
                        <div className="mb-8 text-center">
                            <h2 className="mb-4 text-4xl font-medium text-gray-800">Please select the service you need</h2>
                        </div>

                        <div className="grid min-h-80 grid-cols-2 gap-4">
                            {services.map((service) => (
                                <Button key={service.id} onClick={() => handleGetQueue(service.id)} className="h-full w-full text-4xl">
                                    <Icon iconNode={service.icon} className="size-14" />
                                    {service.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="rounded-lg bg-white p-12 text-center shadow-2xl">
                        <h2 className="mb-4 text-4xl font-medium text-gray-800">Your Queue Number</h2>
                        <div className="mb-8 text-7xl font-bold text-black">{queueNumber}</div>
                        <p className="mb-8 text-2xl text-gray-500">
                            Please wait until your number is called.
                            <br />
                            Watch the display screen for your turn.
                        </p>
                        <Button onClick={() => setQueueNumber(null)} size="lg">
                            Back to Services
                        </Button>
                    </div>
                )}
            </div>
        </DisplayLayout>
    );
}
