'use client';

import { useEffect, useState } from 'react';

const mockSteps = [
  'Researching target accounts...',
  'Analyzing market trends...',
  'Evaluating online presence...',
  'Assessing ABM objectives...',
  'Gathering firmographic data...',
  'Finalizing market insights...',
];

export const useMockStreaming = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (index < mockSteps.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, mockSteps[index]]);
        setIndex(index + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [index]);

  return { messages, done };
};
