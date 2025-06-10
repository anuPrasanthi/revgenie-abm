'use client';

import { useEffect, useState } from 'react';
import { useOnboarding } from '@/context/OnboardingContext';
import { useRouter } from 'next/navigation';
import { ProgressStepper } from '@/components/shared/ProgressStepper';
import { CampaignCard } from '@/components/shared/CampaignCard';
import { motion } from 'framer-motion';

const mockStrategies = [
    {
        accountName: 'TechSolutions Inc.',
        messagingFramework: 'Emotion-Logic-Action',
        contentType: 'Thought Leadership',
        confidence: 'High (87%)',
    },
    {
        accountName: 'Global Enterprises',
        messagingFramework: 'Cast-Claim-Proof',
        contentType: 'Case Studies',
        confidence: 'Medium (72%)',
    },
];

export default function Step4() {
    const { setStrategy } = useOnboarding();
    const router = useRouter();
    const [strategyList, setStrategyList] = useState<typeof mockStrategies>([]);

    useEffect(() => {
        setTimeout(() => setStrategyList(mockStrategies), 500);
    }, []);

    const handleContinue = () => {
        setStrategy({
            messagingFramework: 'Emotion-Logic-Action',
            contentType: 'Thought Leadership',
            channel: ['Email', 'LinkedIn'],
            confidence: 'High',
        });
        router.push('/onboarding/step5');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-slate-50 via-white to-slate-100 p-4">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-8 py-10">
                <ProgressStepper currentStep={3} />
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    <span className="text-blue-600">Campaign</span> Strategy
                </h1>

                <div className="space-y-4 mb-6">
                    {strategyList.length > 0 ? (
                        strategyList.map((strategy, i) => <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <CampaignCard {...strategy} />
                        </motion.div>)
                    ) : (
                        <p className="text-sm text-gray-500 text-center">Generating strategy recommendations...</p>
                    )}
                </div>

                {strategyList.length > 0 && (
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
