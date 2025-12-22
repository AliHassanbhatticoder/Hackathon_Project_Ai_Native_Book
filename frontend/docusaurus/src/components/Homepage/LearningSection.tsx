import React from 'react';
import { Zap, Code2, Rocket, LucideIcon } from 'lucide-react';

interface LearningItem {
  title: string;
  icon: LucideIcon;
  color: string;
  desc: string;
}

const LearningSection: React.FC = () => {
  const items: LearningItem[] = [
    { title: "AI-Assisted", icon: Zap, color: "text-yellow-500", desc: "Speed up your dev cycle by 10x using AI pair-programmers." },
    { title: "AI-Driven", icon: Code2, color: "text-blue-500", desc: "Specifications drive the code. Precision at scale." },
    { title: "AI-Native", icon: Rocket, color: "text-emerald-500", desc: "The final frontier: Systems where AI is the engine." }
  ];

  return (
    <section className="py-24 px-4 bg-slate-100/30 dark:bg-slate-900/20">
      <div className="container max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold dark:text-white">What You'll Master</h2>
      </div>
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="lp-card border-b-4 border-b-transparent hover:border-b-emerald-500 transition-all duration-300">
              <item.icon className={`mb-6 ${item.color}`} size={40} />
              <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;