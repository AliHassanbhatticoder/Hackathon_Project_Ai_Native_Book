import React from 'react';

const steps = [
  { num: "01", title: "Foundations", desc: "Mastering Python & TypeScript for modern engineering." },
  { num: "02", title: "AI Workflows", desc: "Integrating LLMs and prompt engineering into applications." },
  { num: "03", title: "Agent Design", desc: "Building autonomous systems with tools and memory." },
  { num: "04", title: "Scale", desc: "Deploying to production with high availability and security." },
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-black text-center mb-20 dark:text-white">The Learning Roadmap</h2>
        <div className="space-y-12">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-center group">
              <div className="text-6xl font-black text-emerald-500/20 group-hover:text-emerald-500 transition-colors duration-500">
                {s.num}
              </div>
              <div className="lp-card flex-1 w-full">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">{s.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;