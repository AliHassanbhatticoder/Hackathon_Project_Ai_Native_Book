import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// All Components
import HeroSection from '@site/src/components/Homepage/HeroSection';
import TechStack from '@site/src/components/Homepage/TechStack';
import VisionSection from '@site/src/components/Homepage/VisionSection';
import LearningSection from '@site/src/components/Homepage/LearningSection';
import FeatureGrid from '@site/src/components/Homepage/FeatureGrid';
import Roadmap from '@site/src/components/Homepage/Roadmap';
import CTASection from '@site/src/components/Homepage/CTASection';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Co-Create Intelligent Systems with Python & TypeScript"
    >
      <main className="relative bg-slate-50 dark:bg-[#020617]">
        {/* Background Patterns */}
        <div className="bg-grid-pattern absolute inset-0 z-0 opacity-40 pointer-events-none" />
        
        <div className="relative z-10">
          <HeroSection />
          <TechStack />
          <VisionSection />
          <FeatureGrid />
          <LearningSection />
          <Roadmap />
          <CTASection />
        </div>
      </main>
    </Layout>
  );
}