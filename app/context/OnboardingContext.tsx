'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CompanyInfo = {
  name: string;
  website: string;
  linkedin: string;
};

type Account = {
  name: string;
  description: string;
  fitScore: number;
};

type CampaignStrategy = {
  messagingFramework: string;
  contentType: string;
  channel: string[];
  confidence: string;
};

type PersonalizationSettings = {
  tone: string;
  brandVoice: string;
  templates: string;
  compliance: string;
};

type OnboardingState = {
  companyInfo: CompanyInfo;
  accounts: Account[];
  strategy: CampaignStrategy;
  personalization: PersonalizationSettings;
};

type OnboardingContextType = {
  state: OnboardingState;
  setCompanyInfo: (info: CompanyInfo) => void;
  setAccounts: (accounts: Account[]) => void;
  setStrategy: (strategy: CampaignStrategy) => void;
  setPersonalization: (settings: PersonalizationSettings) => void;
};

const defaultState: OnboardingState = {
  companyInfo: { name: '', website: '', linkedin: '' },
  accounts: [],
  strategy: {
    messagingFramework: '',
    contentType: '',
    channel: [],
    confidence: 'Medium',
  },
  personalization: {
    tone: '',
    brandVoice: '',
    templates: '',
    compliance: '',
  },
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<OnboardingState>(defaultState);

  const setCompanyInfo = (info: CompanyInfo) => setState(prev => ({ ...prev, companyInfo: info }));
  const setAccounts = (accounts: Account[]) => setState(prev => ({ ...prev, accounts }));
  const setStrategy = (strategy: CampaignStrategy) => setState(prev => ({ ...prev, strategy }));
  const setPersonalization = (settings: PersonalizationSettings) =>
    setState(prev => ({ ...prev, personalization: settings }));

  return (
    <OnboardingContext.Provider value={{ state, setCompanyInfo, setAccounts, setStrategy, setPersonalization }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = (): OnboardingContextType => {
  const context = useContext(OnboardingContext);
  if (!context) throw new Error('useOnboarding must be used within OnboardingProvider');
  return context;
};
