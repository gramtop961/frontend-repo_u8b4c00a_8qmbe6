import React from 'react';
import { TrendingUp, Flame } from 'lucide-react';

const mockTrends = [
  {
    title: 'AI study hacks for finals week',
    lift: '+48% week-over-week',
    tags: ['AI Tools', 'Students', 'Productivity']
  },
  {
    title: 'Notion vs Obsidian for college notes (AI add-ons)',
    lift: '+32% week-over-week',
    tags: ['Notion', 'Obsidian', 'Workflows']
  },
  {
    title: 'Top 5 free AI tools every freshman needs',
    lift: '+61% week-over-week',
    tags: ['Free Tools', 'Beginners', 'Study']
  }
];

const Features = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between md:mb-14">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Trending in your niche</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Real-time trend intelligence surfaces ideas that perform. Pick a direction and generate a full package instantly.
            </p>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur sm:inline-flex">
            <TrendingUp className="mr-2 h-4 w-4 text-emerald-300" /> Live momentum
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {mockTrends.map((t, i) => (
            <article key={i} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-3 inline-flex items-center gap-2 text-xs text-emerald-300">
                <Flame className="h-4 w-4" />
                <span>{t.lift}</span>
              </div>
              <h3 className="text-lg font-medium leading-snug">{t.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-slate-900/60 px-2.5 py-1 text-xs text-white/70">
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">
                Use this idea
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
