import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-32 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 dark:bg-white p-12 md:p-20 text-center shadow-2xl">
          {/* Decorative Gradient Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white dark:text-black mb-8 leading-tight"> 
              Ready to build the <br /> next generation of AI? 
            </h2>
            <Link 
              to="/docs/introduction" 
              className="no-underline inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/30 hover:text-white"
            >
              Begin Your Journey <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;