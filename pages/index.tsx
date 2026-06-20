import React from 'react';

const digest = {
  date: 'June 20, 2026',
  topic: 'Quantum Biology',
  papers: [
    { title: 'Coherent Energy Transfer in Photosynthetic Complexes', source: 'ArXiv', url: '#' },
    { title: 'Quantum Tunneling in Enzymatic Reactions', source: 'Nature', url: '#' }
  ],
  repos: [
    { name: 'q-bio-sim', url: 'https://github.com/example/q-bio-sim' }
  ]
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-10 max-w-3xl mx-auto font-serif">
      <header className="border-b border-black pb-6 mb-20">
        <h1 className="text-xl tracking-wide-editorial">RESEARCH // DIGEST</h1>
        <p className="text-sm mt-2">{digest.topic} // {digest.date}</p>
      </header>

      <main className="space-y-16">
        <section className="bg-black text-white p-6 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4">Customize Your Digest</h2>
          <form className="flex flex-col gap-4">
            <input 
              type="text" 
              placeholder="Enter your research field (e.g., Quantum Biology)..." 
              className="p-2 text-black w-full"
            />
            <button type="submit" className="bg-white text-black p-2 text-xs uppercase tracking-widest">Generate</button>
          </form>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest mb-6">Latest Papers</h2>
          {digest.papers.map((p, i) => (
            <article key={i} className="mb-6">
              <a href={p.url} className="text-lg leading-relaxed hover:underline">{p.title}</a>
              <span className="block text-[10px] uppercase tracking-wider text-black/50">{p.source}</span>
            </article>
          ))}
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest mb-6">GitHub Releases</h2>
          {digest.repos.map((r, i) => (
            <article key={i}>
              <a href={r.url} className="text-lg leading-relaxed hover:underline">{r.name}</a>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
