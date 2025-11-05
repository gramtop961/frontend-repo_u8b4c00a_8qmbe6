import React from 'react';
import { UserPlus, LayoutDashboard, Sparkles, PenTool, FileText, Tag, Download, Save, BarChart3 } from 'lucide-react';

const steps = [
  { icon: <UserPlus className="h-5 w-5" />, title: 'Sign up & log in', text: 'Use Google or email to create your workspace.' },
  { icon: <LayoutDashboard className="h-5 w-5" />, title: 'See trends', text: 'Land on your dashboard and explore “Trending in your niche”.' },
  { icon: <Sparkles className="h-5 w-5" />, title: 'Enter an idea', text: 'Choose type (Short/Long), tone, and duration.' },
  { icon: <PenTool className="h-5 w-5" />, title: 'Credits & validation', text: 'We validate inputs and deduct credits securely.' },
  { icon: <FileText className="h-5 w-5" />, title: 'Get your script', text: 'Hook, intro, scenes, and CTA crafted by AI.' },
  { icon: <Tag className="h-5 w-5" />, title: 'Metadata optimized', text: 'SEO-friendly titles, descriptions, tags, and hashtags.' },
  { icon: <Download className="h-5 w-5" />, title: 'Edit & export', text: 'Tweak content in the editor, copy or download.' },
  { icon: <Save className="h-5 w-5" />, title: 'Save to history', text: 'Keep your best work and come back anytime.' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Analytics update', text: 'Track credits, performance, and trend shifts.' }
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From idea to publish—streamlined</h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/70">
            A clean, guided flow that turns your thoughts into production-ready YouTube content in minutes.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={i} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 ring-1 ring-inset ring-violet-500/20">
                {s.icon}
              </div>
              <div>
                <h3 className="text-base font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-white/70">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
