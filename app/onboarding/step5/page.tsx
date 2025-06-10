'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useOnboarding } from '@/context/OnboardingContext';
import { ProgressStepper } from '@/components/shared/ProgressStepper';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';

export default function Step5() {
    const router = useRouter();
    const { setPersonalization, state } = useOnboarding();

    const [form, setForm] = useState({
        tone: 'Professional and informative',
        brandVoice: 'Guidelines for brand consistency',
        templates: 'Customized content suggestions',
        compliance: 'Approval processes and regulations',
    });

    const handleChange = (field: keyof typeof form, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const handleContinue = () => {
        setPersonalization(form);
        router.push('/onboarding/step6');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-slate-50 via-white to-slate-100 p-4">
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md bg-white/90 ... "
            >
                <ProgressStepper currentStep={4} />
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Personalization <span className="text-blue-600">Settings</span>
                </h1>

                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">Tone and Style</label>
                        <Input value={form.tone} onChange={e => handleChange('tone', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">Brand Voice</label>
                        <Input value={form.brandVoice} onChange={e => handleChange('brandVoice', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">Message Templates</label>
                        <Input value={form.templates} onChange={e => handleChange('templates', e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-700">Compliance</label>
                        <Input value={form.compliance} onChange={e => handleChange('compliance', e.target.value)} />
                    </div>
                </div>

                <div className="flex justify-between gap-4">
                    <button
                        onClick={() => router.back()}
                        className="w-1/2 bg-gray-100 text-gray-800 border border-gray-300 py-2.5 text-sm rounded-lg hover:bg-gray-200 transition"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleContinue}
                        className="w-1/2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2.5 text-sm font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition shadow-md"
                    >
                        Launch
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
