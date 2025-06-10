'use client';

import { useOnboarding } from '@/context/OnboardingContext';
import { useRouter } from 'next/navigation';
import { ProgressStepper } from '@/components/shared/ProgressStepper';
import { ChatModal } from '@/components/shared/ChatModal';
import { motion } from 'framer-motion';

export default function Step6() {
    const { state } = useOnboarding();
    const router = useRouter();

    const handleLaunch = () => {
        alert('🚀 Campaign Launched Successfully!');
        router.push('/');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-slate-50 via-white to-slate-100 p-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md bg-white/90 ..."
            >
                <ProgressStepper currentStep={5} />
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Review & <span className="text-blue-600">Launch</span>
                </h1>

                <div className="text-sm text-gray-700 space-y-4 mb-6">
                    <div>
                        <p className="font-semibold">Company Info:</p>
                        <p>{state.companyInfo.name}</p>
                        <p>{state.companyInfo.website}</p>
                        <p>{state.companyInfo.linkedin}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Accounts Selected:</p>
                        {state.accounts.map((acc, i) => (
                            <p key={i}>
                                {acc.name} – <span className="text-blue-600">{acc.fitScore}%</span>
                            </p>
                        ))}
                    </div>
                    <div>
                        <p className="font-semibold">Strategy:</p>
                        <p>Framework: {state.strategy.messagingFramework}</p>
                        <p>Type: {state.strategy.contentType}</p>
                        <p>Channels: {state.strategy.channel.join(', ')}</p>
                        <p>Confidence: {state.strategy.confidence}</p>
                    </div>
                    <div>
                        <p className="font-semibold">Personalization:</p>
                        <p>Tone: {state.personalization.tone}</p>
                        <p>Voice: {state.personalization.brandVoice}</p>
                        <p>Templates: {state.personalization.templates}</p>
                        <p>Compliance: {state.personalization.compliance}</p>
                    </div>
                </div>

                <button
                    onClick={handleLaunch}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2.5 text-sm font-medium rounded-lg transition shadow-md"
                >
                    Launch Campaign
                </button>
                <ChatModal />
            </motion.div>
        </div>
    );
}
