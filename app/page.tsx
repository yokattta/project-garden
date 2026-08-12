const projects = [
  {
    number: "01", title: "Little Builder", chinese: "小小创造家", tone: "violet", status: "Private prototype",
    idea: "Turn a child’s everyday idea into one tiny project they can actually build.",
    note: "Parent-guided · iPad-first · Idea to action",
    live: "https://little-builder-lab.yokattta.chatgpt.site", repo: "https://github.com/yokattta/little-builder",
    mark: "▰",
  },
  {
    number: "02", title: "Luke’s Learning Trail", chinese: "每日学习小径", tone: "gold", status: "Growing weekly",
    idea: "A gentle guided-study system that adapts STEM, art, resilience, Chinese, and poetry to one child.",
    note: "Adaptive learning · Family tool · Local-first",
    live: "https://lukes-learning-trail.yokattta.chatgpt.site", repo: "https://github.com/yokattta/lukes-learning-trail",
    mark: "△",
  },
  {
    number: "03", title: "Banpet", chinese: "班宠 · 摸鱼搭子", tone: "coral", status: "Public MVP",
    idea: "A tiny office companion that counts down to freedom—and makes the workday feel a little lighter.",
    note: "Playful utility · Local privacy · Mac experiment",
    live: "https://github.com/yokattta/banpet", repo: "https://github.com/yokattta/banpet",
    mark: "●",
  },
];

export default function Home() {
  return <main>
    <nav className="nav"><a className="wordmark" href="#top">YP<span>·</span></a><div><a href="#work">Work</a><a href="#about">About</a><a href="https://github.com/yokattta" target="_blank" rel="noreferrer">GitHub ↗</a></div></nav>

    <header className="hero" id="top">
      <div className="hero-copy"><p className="kicker">YUE PAN · PRODUCT MAKER</p><h1>Small tools<br/>for <em>real life.</em></h1><p className="lede">I make thoughtful, slightly playful products for learning, family, and the little moments that make a day feel human.</p><a className="round-link" href="#work"><span>See the work</span><b>↓</b></a></div>
      <div className="hero-world" aria-label="Three miniature project worlds"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="world violet-world"><span>▰</span><i>BUILD</i></div><div className="world gold-world"><span>〰</span><i>LEARN</i></div><div className="world coral-world"><span>●</span><i>PLAY</i></div></div>
    </header>

    <section className="work" id="work"><div className="section-head"><p className="kicker">SELECTED PROJECTS · 2026</p><h2>A garden of useful experiments.</h2><p>Each project starts with one small question about how people learn, make, or get through the day.</p></div>
      <div className="project-list">{projects.map((project) => <article className={`project ${project.tone}`} key={project.title}>
        <div className="project-number">{project.number}</div><div className="project-art"><div className="project-mark">{project.mark}</div><span>{project.status}</span></div>
        <div className="project-copy"><div className="title-row"><div><p>{project.chinese}</p><h3>{project.title}</h3></div><span className="status">{project.status}</span></div><p className="idea">{project.idea}</p><p className="note">{project.note}</p><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer">View project <span>↗</span></a><a href={project.repo} target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></div>
      </article>)}</div>
    </section>

    <section className="about" id="about"><p className="kicker">ABOUT THIS GARDEN</p><div><h2>I like products that feel<br/>useful <em>and</em> alive.</h2><p>I build to understand an idea. The projects here are small on purpose: each one is a working experiment shaped around a real person, a real routine, or a real moment of friction.</p><p className="bilingual">用产品探索生活里那些小但真实的问题。</p></div></section>
    <section className="next"><span>04</span><div><p className="kicker">THE NEXT PROJECT</p><h2>There is room to grow.</h2><p>New experiments will keep appearing here.</p></div><div className="seed">✦</div></section>
    <footer><div><b>Yue’s Project Garden</b><p>Designed and built with curiosity.</p></div><a href="https://github.com/yokattta" target="_blank" rel="noreferrer">github.com/yokattta ↗</a><span>© 2026</span></footer>
  </main>;
}
