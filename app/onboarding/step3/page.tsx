'use client';

import { useEffect, useState } from 'react';
import { useOnboarding } from '@/context/OnboardingContext';
import { useRouter } from 'next/navigation';
import { ProgressStepper } from '@/components/shared/ProgressStepper';
import { AccountCard } from '@/components/shared/AccountCard';
import { motion } from 'framer-motion';

type Account = {
    name: string;
    description: string;
    fitScore: number;
    reasoning: string;
};

const mockAccounts: Account[] = [
    {
        name: 'TechSolutions Inc.',
        description: 'Focus in AI R&D, localizing emerging markets',
        fitScore: 86,
        reasoning: 'Recently raised Series B and posted 5 open marketing roles on LinkedIn.',
    },
    {
        name: 'InnovateX',
        description: 'SaaS startup, marketing engagement platform',
        fitScore: 82,
        reasoning: 'CEO posts about ABM frequently. Increased hiring in product team.',
    },
    {
        name: 'Global Enterprises',
        description: 'Multinational operations, enterprise tech fit',
        fitScore: 75,
        reasoning: 'Attending upcoming SaaS summit. Product-market fit indicators align.',
    },
];


export default function Step3() {
    const { setAccounts, state } = useOnboarding();
    const router = useRouter();
    const [accounts, setLocalAccounts] = useState<Account[]>([]);

    useEffect(() => {
        // Simulate AI data load
        setTimeout(() => setLocalAccounts(mockAccounts), 500);
    }, []);

    const handleRemove = (index: number) => {
        const updated = accounts.filter((_, i) => i !== index);
        setLocalAccounts(updated);
    };

    const handleContinue = () => {
        setAccounts(accounts);
        router.push('/onboarding/step4');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-slate-50 via-white to-slate-100 p-4">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-8 py-10">
                <ProgressStepper currentStep={2} />
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Review <span className="text-blue-600">Target Accounts</span>
                </h1>

                <div className="space-y-4 mb-6">
                    {accounts.length > 0 ? (
                        accounts.map((account, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <AccountCard account={account} onRemove={() => handleRemove(i)} />
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-sm text-gray-500 text-center">Loading AI-selected accounts...</p>
                    )}
                </div>

                {accounts.length > 0 && (
                    <button
                        onClick={handleContinue}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2.5 text-sm font-medium rounded-lg transition shadow-md"
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
    );
}
