import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles, Coins } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center md:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-violet-300" />
          <span className="text-white/80">AI-powered YouTube content studio</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          YTube Content Generator
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Go from idea to shoot-ready script in seconds. Get optimized titles, descriptions, hashtags, and posting recommendations—powered by large language models and trend intelligence.
        </p>

        {/* Prompt input + controls */}
        <div className="mt-8 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex-1">
              <input
                type="text"
                aria-label="content-idea"
                placeholder="Make a video about AI tools for college students"
                className="w-full rounded-xl border-none bg-transparent px-4 py-3 text-white placeholder-white/60 outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              <select className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm">
                <option>Short</option>
                <option>Long</option>
              </select>
              <select className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm">
                <option>Informative</option>
                <option>Funny</option>
                <option>Emotional</option>
              </select>
              <select className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm">
                <option>30 sec</option>
                <option>60 sec</option>
                <option>5 min</option>
                <option>10 min</option>
              </select>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-white transition hover:bg-violet-400">
              <Rocket className="h-4 w-4" />
              <span>Generate</span>
            </button>
          </div>
          <div className="mt-3 flex items-center justify-between px-1 text-xs text-white/70">
            <div className="inline-flex items-center gap-1">
              <Coins className="h-4 w-4 text-amber-300" />
              <span>Credits: 120</span>
            </div>
            <span>No credit card required • Free trial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
