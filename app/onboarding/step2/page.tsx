'use client';

import { useRouter } from 'next/navigation';
import { useMockStreaming } from '@/hooks/useMockStreaming';
import { ProgressStepper } from '@/components/shared/ProgressStepper';
import { FaCircleNotch } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Step2() {
    const { messages, done } = useMockStreaming();
    const router = useRouter();

    const handleNext = () => {
        router.push('/onboarding/step3');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-slate-50 via-white to-slate-100 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="w-full max-w-md bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-8 py-10 text-center"
            >
                <ProgressStepper currentStep={1} />
                <h1 className="text-2xl font-semibold mb-6 text-gray-800">
                    Analyzing Your <span className="text-blue-600">Company and Market...</span>
                </h1>

                <div className="flex flex-col gap-3 items-start text-left mb-6 min-h-[150px]">
                    {messages.map((msg, i) => (
                        <p key={i} className="text-sm text-gray-700 before:content-['•_'] before:text-blue-500 before:mr-1">
                            {msg}
                        </p>
                    ))}
                    {!done && (
                        <div className="flex items-center text-gray-500 gap-2 text-sm mt-2 animate-pulse">
                            <FaCircleNotch className="animate-spin" />
                            Processing...
                        </div>
                    )}
                </div>

                {done && (
                    <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2.5 text-sm font-medium rounded-lg transition shadow-md"
                    >
                        Continue
                    </button>
                )}
            </motion.div>
        </div>
    );
}
