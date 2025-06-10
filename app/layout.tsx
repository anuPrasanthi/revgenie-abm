import './globals.css';
import { OnboardingProvider } from '@/context/OnboardingContext';

export const metadata = {
  title: 'RevGenie ABM Genie',
  description: 'AI-first ABM onboarding',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <OnboardingProvider>
          {children}
        </OnboardingProvider>
      </body>
    </html>
  );
}
