'use client';

import { useState } from 'react';

export const ChatModal = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages(prev => [...prev, `🧑: ${userMessage}`]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, `🤖: Based on your campaign, consider adding personalized LinkedIn outreach.`]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700"
        >
          Ask Genie
        </button>
      ) : (
        <div className="w-[300px] bg-white shadow-xl rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold">Genie Chat</h3>
            <button onClick={() => setOpen(false)} className="text-xs text-gray-500">✕</button>
          </div>
          <div className="h-[160px] overflow-y-auto border border-gray-200 rounded p-2 text-xs mb-2 space-y-1">
            {messages.map((m, i) => (
              <div key={i}>{m}</div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about suggestions..."
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs"
            />
            <button onClick={handleSend} className="text-blue-600 text-sm">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};
