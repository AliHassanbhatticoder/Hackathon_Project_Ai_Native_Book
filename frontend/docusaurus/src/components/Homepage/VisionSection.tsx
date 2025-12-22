import React from 'react';
import { Layers, Cpu, LucideIcon } from 'lucide-react';

interface VisionItem {
  title: string;
  icon: React.ReactElement;
  desc: string;
}

const VisionSection: React.FC = () => {
  const visions: VisionItem[] = [
    { 
      title: "Intelligent Architectures", 
      icon: <Layers className="text-blue-500" size={32} />, 
      desc: "Move beyond CRUD. Build systems that think, adapt, and evolve using specification-driven development." 
    },
    { 
      title: "Autonomous Agents", 
      icon: <Cpu className="text-emerald-500" size={32} />, 
      desc: "Deploy AI agents that handle complex workflows, from automated coding to real-time data orchestration." 
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-6">Our Vision</h2>
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visions.map((item, i) => (
            <div key={i} className="lp-card group">
              <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl w-fit group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;