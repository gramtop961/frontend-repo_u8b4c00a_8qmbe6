import React from 'react';
import { TrendingUp, PenTool, Tag, Clock, Image } from 'lucide-react';

const features = [
  {
    icon: <PenTool className="h-5 w-5 text-violet-400" />,
    title: 'Shoot‑ready scripts',
    description:
      'Structured scripts with hooks, scenes, dialogue, B‑roll notes, and CTAs tailored to your niche.'
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-violet-400" />,
    title: 'Trend intelligence',
    description:
      'Real‑time idea generation mapped to what’s trending in your space so you publish what performs.'
  },
  {
    icon: <Tag className="h-5 w-5 text-violet-400" />,
    title: 'Optimized metadata',
    description:
      'High‑performing titles, descriptions, tags, and hashtags engineered for discovery.'
  },
  {
    icon: <Clock className="h-5 w-5 text-violet-400" />,
    title: 'Post timing & cadence',
    description:
      'Recommendations for best times to post, upload frequency, and content calendar tips.'
  },
  {
    icon: <Image className="h-5 w-5 text-violet-400" />,
    title: 'Thumbnail concepts',
    description:
      'Compelling thumbnail ideas with copy angles and visual prompts that increase CTR.'
  }
];

const Features = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to publish</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            From idea to upload, automate the busywork and focus on creating. Built for creators, marketers, and agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 ring-1 ring-inset ring-violet-500/20">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
