import React from 'react';
import { Rocket, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-indigo-600/30 p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Turn ideas into publish‑ready videos—instantly
              </h3>
              <p className="mt-3 max-w-xl text-white/80">
                Start your free trial and generate your first script, metadata, and posting plan in seconds.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/70">
                <Shield className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
            </div>
            <div className="flex w-full max-w-sm flex-col items-stretch gap-3 md:w-auto md:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-white/90">
                <Rocket className="h-4 w-4" />
                Start free
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10">
                View samples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
