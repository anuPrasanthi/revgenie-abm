RevGenie – ABM Genie Onboarding Flow
This project implements a complete 6-step onboarding experience for the Account-Based Marketing (ABM) Genie using Next.js 14+, Tailwind CSS, TypeScript, and mock AI-first interaction features. Built for the RevGenie fullstack developer assessment, it simulates real-world AI product behavior including live text generation, reasoning display, and interactive decision-making.

* Project Structure
app/
  ├─ onboarding/         // Step pages (step1 to step6)
  ├─ components/
  │   ├─ ui/             // Inputs, buttons, etc.
  │   ├─ shared/         // ProgressStepper, AccountCard, ChatModal, etc.
  ├─ context/            // OnboardingContext (global state)
  ├─ hooks/              // useMockStreaming for AI simulation
* Tech Stack
Next.js 14+ (App Router)
TypeScript
Tailwind CSS
Framer Motion (UI animations)
React Icons (UI icons)
Context API (global step state)
Mock streaming + AI reasoning simulation
* Features
1 AI-First Interactions
Simulated AI streaming with typing effect
Reasoning display and confidence scores
AI-generated mock accounts and strategies

2 Onboarding Flow
Company Info + CSV Upload
AI Analysis Loader
Account Selection & Reasoning
Campaign Strategy Review
Tone & Personalization Settings
Final Review + Launch

3 Chat Modal
Genie-style popup chat for AI suggestion interaction (Step 6)

* Setup Instructions
1. Clone
git clone https://github.com/yourusername/revgenie-abm-genie.git
cd revgenie-abm-genie
2. Install
npm install
# or
pnpm install
3. Run Dev
npm run dev
* Assessment Goals Covered
1 Full 6-step flow per spec
2 Streaming AI + progress indicators
3 Reasoning explanations + editable results
4 Chat interface modal
5 TailwindCSS + design system match
6 Fully responsive & mobile-friendly

* What I’d Improve with More Time
1 Add drag/drop CSV parser with data preview
2 Replace mock logic with real AI API integration (e.g., OpenAI, Langchain)
3 Centralize type definitions in /types
4 Add form validation & error messaging
5 Implement session autosave + recovery (localStorage)

* Author
AnuPrasanthiPothuls
Frontend-Focused Fullstack Developer

