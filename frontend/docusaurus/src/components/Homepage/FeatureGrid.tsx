import React from 'react';
import { Shield, Zap, Globe, Cpu, Database, Layout } from 'lucide-react';

const features = [
  { title: "Spec-Driven Development", desc: "Design systems using formal specifications that drive code generation and testing.", icon: Shield },
  { title: "Real-time Orchestration", desc: "High-performance agent communication using FastAPI and WebSocket protocols.", icon: Zap },
  { title: "Dual-Stack Mastery", desc: "Seamlessly integrate Python's AI power with TypeScript's frontend type-safety.", icon: Globe },
  { title: "Agentic Workflows", desc: "Build autonomous agents that can plan, reason, and execute complex tasks.", icon: Cpu },
  { title: "Scalable Data Layers", desc: "Ready-to-use patterns for Vector DBs, SQL, and distributed caching systems.", icon: Database },
  { title: "Production Ready", desc: "Deployment-first approach with Docker, CI/CD, and monitoring baked in.", icon: Layout },
];

const FeatureGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-transparent">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 dark:text-white">Technical Excellence</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Everything you need to build production-grade AI applications from scratch.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="lp-card group border-none hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
              <f.icon className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-3 dark:text-white">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;