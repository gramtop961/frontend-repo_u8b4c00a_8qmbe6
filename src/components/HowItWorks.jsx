import React from 'react';
import { Rocket, Sparkles, PenTool, Calendar } from 'lucide-react';

const steps = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Type your idea',
    text: 'Describe the video you want. Be casual—one sentence is enough.'
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: 'Get a full package',
    text: 'Receive a structured script, metadata, trending angles, and thumbnail prompts.'
  },
  {
    icon: <Calendar className="h-5 w-5" />,
    title: 'Post at the right time',
    text: 'We suggest when to publish and how to tag for maximum reach.'
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Publish with confidence',
    text: 'Export, copy, and go. Save hours every day and scale your channel.'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Your AI assistant handles ideation, scripting, and optimization so you can focus on filming.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
