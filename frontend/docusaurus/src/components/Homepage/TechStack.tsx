import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section className="py-20 border-y border-slate-200 dark:border-white/5">
      <div className="container text-center px-4">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Powering the Architecture</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {/* Aap yahan logos laga sakte hain, abhi text base placeholders hain */}
          {["FastAPI", "React", "Docusaurus", "Tailwind", "Framer Motion", "PostgreSQL", "OpenAI"].map((t) => (
            <span key={t} className="text-2xl font-bold text-slate-600 dark:text-slate-300">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;