import React, { useState } from 'react';
import { Copy, Download, Save, FileText, Tag } from 'lucide-react';

const initialScript = `HOOK:\nWhat if you could double your study efficiency this week—without studying longer?\n\nINTRO:\nIn this video, we’ll try 5 AI tools that help college students learn faster, take smarter notes, and stay focused.\n\nCTA:\nIf this helps, hit like and subscribe for more student-friendly AI tips!`;

const initialMetadata = {
  title: '5 AI Tools Every College Student Needs (Study Faster in 2025)',
  description:
    'Discover five AI tools that help students take better notes, stay focused, and study smarter. Perfect for finals week or everyday productivity! Tools covered: Notion AI, Perplexity, Readwise, xTiles, Speechify. #AITools #Students #Productivity',
  tags: ['AI Tools', 'Students', 'Productivity', 'Study Hacks', 'Finals']
};

const Editor = () => {
  const [script, setScript] = useState(initialScript);
  const [meta, setMeta] = useState(initialMetadata);

  const onCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const download = (filename, content) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative w-full bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Interactive editor</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Review and refine your AI-generated script and metadata. Copy, download, and save when you’re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Script pane */}
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="inline-flex items-center gap-2 text-sm text-white/80">
                <FileText className="h-4 w-4 text-violet-300" /> Script
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onCopy(script)} className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                  <Copy className="h-3.5 w-3.5" /> Copy
                </button>
                <button onClick={() => download('script.txt', script)} className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
                <button className="inline-flex items-center gap-1 rounded-lg bg-violet-500 px-3 py-1.5 text-xs hover:bg-violet-400">
                  <Save className="h-3.5 w-3.5" /> Save
                </button>
              </div>
            </div>
            <textarea
              value={script}
              onChange={(e) => setScript(e.target.value)}
              className="min-h-[260px] flex-1 resize-vertical bg-transparent p-4 outline-none placeholder-white/50"
            />
          </div>

          {/* Metadata pane */}
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="inline-flex items-center gap-2 text-sm text-white/80">
                <Tag className="h-4 w-4 text-violet-300" /> Metadata
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onCopy(`${meta.title}\n\n${meta.description}\n\nTags: ${meta.tags.join(', ')}`)} className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                  <Copy className="h-3.5 w-3.5" /> Copy
                </button>
                <button onClick={() => download('metadata.txt', `${meta.title}\n\n${meta.description}\n\nTags: ${meta.tags.join(', ')}`)} className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <input
                type="text"
                value={meta.title}
                onChange={(e) => setMeta({ ...meta, title: e.target.value })}
                className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-sm"
              />
              <textarea
                value={meta.description}
                onChange={(e) => setMeta({ ...meta, description: e.target.value })}
                className="min-h-[180px] rounded-xl border border-white/10 bg-slate-900/60 p-3 text-sm"
              />
              <div className="flex flex-wrap gap-2">
                {meta.tags.map((t, idx) => (
                  <span key={idx} className="rounded-full border border-white/10 bg-slate-900/60 px-2.5 py-1 text-xs text-white/80">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics / credits banner */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
          Credits: 120 • Last updated: just now • Trends updating in real-time
        </div>
      </div>
    </section>
  );
};

export default Editor;
