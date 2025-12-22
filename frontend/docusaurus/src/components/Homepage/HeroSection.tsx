import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';
import { ArrowRight, Sparkles, Terminal, Code } from 'lucide-react';

const TypewriterText: React.FC = () => {
  const words: string[] = ["AI-Native Software", "Intelligent Systems", "Scalable Agents", "Modern Architectures"];
  const [text, setText] = useState<string>('');
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, typingSpeed, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-500 font-extrabold">
      {text}<span className="animate-pulse text-emerald-500 ml-1">|</span>
    </span>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 md:py-32 px-4 overflow-hidden bg-slate-50 dark:bg-[#020617]">
      
      {/* --- NEXT-GEN BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. Animated Mesh Gradient Blobs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-emerald-500/10 dark:bg-emerald-500/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-blue-600/10 dark:bg-blue-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-[20%] w-[60%] h-[30%] bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] rounded-full"
        />

        {/* 2. Cyber Grid with Perspective */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] dark:opacity-[0.25]" />
        
        {/* 3. Radial Mask to fade edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        
        {/* Floating Icons for Tech Vibe */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden lg:block"
        >
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 left-10 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 rotate-12">
            <Terminal className="text-emerald-500" size={24} />
          </motion.div>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute top-20 right-0 p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 -rotate-12">
            <Code className="text-blue-500" size={24} />
          </motion.div>
        </motion.div>

        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-emerald-500/20 dark:border-emerald-500/30 mb-10 shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
          <span className="text-xs md:text-sm font-black text-slate-800 dark:text-emerald-100 uppercase tracking-[0.2em]">
            AI-Native Framework v1.0
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.05]">
          Architecting <br className="hidden md:block" />
          <TypewriterText />
        </h1>

        {/* Sub-text */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          The ultimate blueprint for building <span className="text-slate-900 dark:text-white font-bold italic">production-ready</span> agents. 
          Bridging the gap between raw models and scalable software.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            to="/docs/introduction" 
            className="group no-underline relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(16,185,129,0.2)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center group-hover:text-white">
              Launch Blueprint <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
          
          <Link 
            to="https://github.com" 
            className="no-underline flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-2xl border-2 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-slate-900 dark:text-white"
          >
            Star on GitHub
          </Link>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-20 opacity-40 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full mx-auto relative">
            <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-600 rounded-full mx-auto mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;