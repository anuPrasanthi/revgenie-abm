'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { useOnboarding } from '@/context/OnboardingContext';
import { ProgressStepper } from '@/components/shared/ProgressStepper';
import { FaUpload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Step1() {
  const { setCompanyInfo } = useOnboarding();
  const router = useRouter();

  const [company, setCompany] = useState({ name: '', website: '', linkedin: '' });

  const handleContinue = () => {
    setCompanyInfo(company);
    router.push('/onboarding/step2');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-slate-50 via-white to-slate-100 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-8 py-10"
      >
        <ProgressStepper currentStep={0} />
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Get Started with <span className="text-blue-600">ABM Genie</span>
        </h1>

        <div className="space-y-4 mb-6">
          <Input
            placeholder="Company Name"
            value={company.name}
            onChange={e => setCompany({ ...company, name: e.target.value })}
          />
          <Input
            placeholder="Website"
            value={company.website}
            onChange={e => setCompany({ ...company, website: e.target.value })}
          />
          <Input
            placeholder="LinkedIn Profile"
            value={company.linkedin}
            onChange={e => setCompany({ ...company, linkedin: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Target Account List (CSV)
          </label>
          <label className="flex items-center gap-3 cursor-pointer text-sm border border-dashed border-gray-300 px-4 py-3 rounded-md hover:bg-gray-100 transition">
            <FaUpload className="text-gray-500" />
            <span className="text-gray-600">Choose File</span>
            <input type="file" accept=".csv" className="hidden" />
          </label>
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2.5 text-sm font-medium rounded-lg transition shadow-md"
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
}
