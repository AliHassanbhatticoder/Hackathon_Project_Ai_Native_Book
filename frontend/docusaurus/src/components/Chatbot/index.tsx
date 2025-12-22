import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, MessageSquare, ChevronDown, Paperclip } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOK_BACKEND_URL = 'https://hackathonprojectainativebook-production.up.railway.app';

export default function CustomChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [botConfig, setBotConfig] = useState({ url: '', key: '', name: 'Assistant', tagline: 'Online' });
  const [messages, setMessages] = useState([{ role: 'bot', content: 'How can I help you today?' }]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch(`${BOOK_BACKEND_URL}/admin/chatbot-config`);
        const data = await response.json();
        setBotConfig({ url: data.apiUrl, key: data.apiKey, name: data.botName, tagline: data.botTagline });
      } catch (e) { /* Fallback handled by state */ }
    }
    fetchConfig();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !botConfig.url) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${botConfig.url}/api/v1/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, api_key: botConfig.key, session_id: 'user_1' }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'bot', content: data.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: 'Sorry, I am having trouble connecting.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Z-INDEX FIX: Docusaurus Navbar is usually 1000. We use 999 to stay below it.
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[550px] max-h-[75vh] bg-white dark:bg-[#111] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden"
          >
            {/* CLEAN HEADER */}
            <div className="px-6 py-4 border-b border-slate-100 dark:border-white/5 flex justify-between items-center bg-white dark:bg-[#111]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold dark:text-white m-0 p-0 leading-none">{botConfig.name}</h3>
                  <p className="text-[11px] text-slate-400 m-0 mt-1 uppercase tracking-wider font-semibold">{botConfig.tagline}</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* CHAT AREA */}
            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-black/20">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-white/10'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-1 items-center p-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              )}
            </div>

            {/* INPUT AREA */}
            <div className="p-4 bg-white dark:bg-[#111] border-t border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 rounded-xl px-3 py-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent border-none outline-none py-3 text-sm dark:text-white"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isLoading || !input.trim()}
                  className="text-emerald-500 hover:text-emerald-600 disabled:opacity-30 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        {isOpen ? <ChevronDown size={28} /> : <MessageSquare size={26} />}
      </button>
    </div>
  );
}