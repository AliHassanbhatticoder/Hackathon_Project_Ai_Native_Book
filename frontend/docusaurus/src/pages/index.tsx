import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Zap,
  Code2,
  CheckCircle2,
  Users,
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Terminal
} from 'lucide-react';
import styles from './index.module.css';

/* === 1. FIXED TYPEWRITER ANIMATION === 
   Logic: Writes word -> Waits -> Deletes -> Waits -> Next Word.
   Ensures infinite loop and no glitches.
*/
const TypewriterText = () => {
  const words = [
    "AI-Native Software",
    "Intelligent Systems",
    "Scalable Agents",
    "Modern Architectures"
  ];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];

      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setTypingSpeed(50); // Faster deletion
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setTypingSpeed(100); // Normal typing
      }

      if (!isDeleting && text === currentWord) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        // Word deleted, move to next
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, typingSpeed]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 dark:from-fuchsia-400 dark:to-purple-400 font-extrabold">
      {text}
      <span className="cursor-blink"></span>
    </span>
  );
};

/* === 2. PAGE SECTIONS WITH PROVIDED CONTENT === */

function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      <div className="text-center max-w-5xl mx-auto z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-100 dark:border-fuchsia-800 mb-8"
        >
          <Sparkles className="w-4 h-4 text-fuchsia-600" />
          <span className="text-sm font-bold text-fuchsia-900 dark:text-fuchsia-200">
            Build the Future with AI-Native Software
          </span>
        </motion.div>

        {/* Headline with Animation */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
          Co-Create <br className="md:hidden" />
          <TypewriterText /> <br />
          with Python & TypeScript
        </h1>

        {/* Subheadlines */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          Design, build and scale modern software where artificial intelligence is not an add-on — it is the core of your application.
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
          Create production-ready AI systems using real-world development practices, spec-driven workflows, and intelligent agents.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/docs/intro"
            className="flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full bg-slate-900 text-white shadow-xl hover:scale-105 transition-transform dark:bg-white dark:text-black"
          >
            Start Reading <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="py-24 px-4 bg-white/50 dark:bg-white/5">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Our Vision</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
          We believe the future of software engineering is <span className="font-bold text-fuchsia-600">AI-Native</span> — where humans and intelligent systems work together to build powerful, scalable, and autonomous software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="lp-card p-8">
            <h4 className="font-bold text-xl mb-4 dark:text-white flex items-center gap-2">
              <Layers className="text-blue-500" /> Intelligent Architectures
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>• Design intelligent software architectures</li>
              <li>• Think in specifications, not just code</li>
            </ul>
          </div>
          <div className="lp-card p-8">
            <h4 className="font-bold text-xl mb-4 dark:text-white flex items-center gap-2">
              <Cpu className="text-purple-500" /> Automated Workflows
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>• Build AI-powered agents</li>
              <li>• Automate development workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningSection() {
  const items = [
    {
      title: "1. AI-Assisted Development",
      desc: "Use AI as a productivity partner to accelerate coding, debugging, and documentation.",
      icon: Zap,
      color: "text-yellow-500",
      bg: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      title: "2. AI-Driven Engineering",
      desc: "Let specifications drive code generation, testing, and architecture.",
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "3. AI-Native Systems",
      desc: "Build intelligent applications where AI models are the core engine — not just feature add-ons.",
      icon: Cpu,
      color: "text-fuchsia-500",
      bg: "bg-fuchsia-50 dark:bg-fuchsia-900/20"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900 dark:text-white">What You Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="lp-card p-8 hover:-translate-y-2 transition-transform">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const points = [
    "Real-world, production-focused content",
    "Modern tools and frameworks",
    "Python + TypeScript dual-stack learning",
    "Spec-first development approach",
    "Agent-based system design",
    "Cloud-ready and scalable architectures"
  ];

  return (
    <section className="py-24 px-4 bg-slate-50/50 dark:bg-white/5">
      <div className="container max-w-5xl mx-auto">
        <div className="lp-card p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Why Learn With Us</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">You don’t just learn concepts — you build real systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="text-fuchsia-500 flex-shrink-0" size={24} />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PathSection() {
  const steps = [
    "Programming Fundamentals",
    "AI-Assisted Workflows",
    "Spec-Driven Development",
    "Intelligent Agents & Orchestration",
    "Scalable AI Architectures"
  ];

  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-slate-900 dark:text-white">Learning Path</h2>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-16">A structured journey from foundations to advanced AI systems:</p>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="lp-card p-6 flex items-center gap-6 group hover:border-fuchsia-400/50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-fuchsia-600 shadow-sm group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audiences = [
    { title: "Students", desc: "Who want cutting-edge skills" },
    { title: "Developers", desc: "Upgrading to AI-Native workflows" },
    { title: "Freelancers", desc: "Building intelligent products" },
    { title: "Startups & Founders", desc: "Creating AI-first software" },
  ];

  return (
    <section className="py-24 px-4 bg-slate-50/50 dark:bg-white/5">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Who This Is For</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-16">No matter where you start — this path prepares you for the future.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {audiences.map((a, i) => (
            <div key={i} className="lp-card p-8 flex flex-col items-center justify-center min-h-[200px] hover:bg-white/80 dark:hover:bg-slate-800/80">
              <Users className="mb-4 text-fuchsia-500" size={32} />
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{a.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 dark:bg-black p-12 md:p-20 text-center shadow-2xl border border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-fuchsia-900/30 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Start building intelligent software today.</h2>
            <Link to="/docs/intro" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full bg-white text-black hover:bg-fuchsia-50 transition-colors">
              Begin Your Journey <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomFooter() {
  return (
    <footer className="py-16 px-4 bg-slate-50 dark:bg-[#02040a] border-t border-slate-200 dark:border-slate-800">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/docs/intro" className="footer-link">Documentation</Link></li>
              <li><Link to="#" className="footer-link">Curriculum</Link></li>
              <li><Link to="#" className="footer-link">Learning Path</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Community</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="footer-link flex items-center gap-2"><Youtube size={16} /> YouTube</Link></li>
              <li><Link to="#" className="footer-link flex items-center gap-2"><Linkedin size={16} /> LinkedIn</Link></li>
              <li><Link to="#" className="footer-link flex items-center gap-2"><Github size={16} /> GitHub</Link></li>
              <li><Link to="#" className="footer-link flex items-center gap-2"><Twitter size={16} /> Twitter</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="footer-link">Open-Source Projects</Link></li>
              <li><Link to="#" className="footer-link">AI Specifications</Link></li>
              <li><Link to="#" className="footer-link">Developer Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">About</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="footer-link">Our Mission</Link></li>
              <li><Link to="#" className="footer-link">Contact</Link></li>
              <li><Link to="#" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="#" className="footer-link">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © 2025 • AI-Native Documentation Platform • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Co-Create Intelligent Systems with Python & TypeScript"
    >
      <main className="min-h-screen relative overflow-hidden">
        {/* Floating Background Blobs */}
        <div className="lp-blob-container">
          <div className="lp-blob blob-1"></div>
          <div className="lp-blob blob-2"></div>
          <div className="lp-blob blob-3"></div>
        </div>

        {/* Sections in correct order */}
        <HeroSection />
        <VisionSection />
        <LearningSection />
        <WhyUsSection />
        <PathSection />
        <AudienceSection />
        <CTASection />
        <CustomFooter />
      </main>
    </Layout>
  );
}