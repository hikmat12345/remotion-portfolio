export default function Home() {
  return (
    <div className="min-h-screen bg-[#060608] text-zinc-100 overflow-x-hidden">
      {/* Background glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-150px] w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[100px]" />
        <div className="absolute bottom-[-100px] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* ══ NAV ══ */}
        <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-xl bg-[#060608]/80">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="font-mono text-sm text-indigo-400 font-semibold tracking-widest uppercase">
              hikmat.dev
            </span>
            <div className="hidden sm:flex items-center gap-8 text-sm text-zinc-400">
              <a href="#about"      className="hover:text-white transition-colors">About</a>
              <a href="#skills"     className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="hover:text-white transition-colors">Work</a>
              <a href="#clients"    className="hover:text-white transition-colors">Clients</a>
              <a href="#projects"   className="hover:text-white transition-colors">Projects</a>
              <a href="#contact"    className="hover:text-white transition-colors">Contact</a>
            </div>
            <a
              href="mailto:hikmat@example.com"
              className="text-xs font-semibold px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              Hire Me
            </a>
          </div>
        </nav>

        {/* ══ HERO ══ */}
        <section id="about" className="pt-24 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text side */}
              <div className="flex-1 text-center lg:text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 text-xs font-mono mb-6">
                  <span className="glow-dot inline-block" />
                  Available for new projects
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4">
                  <span className="text-white">Hikmat</span>
                  <br />
                  <span className="gradient-text animate-gradient-x">Ullah Khan</span>
                </h1>

                <p className="text-xl sm:text-2xl text-zinc-300 font-light mb-5">
                  Senior Full-Stack Developer · Remotion Specialist
                </p>

                <p className="text-zinc-400 max-w-xl leading-relaxed mb-8">
                  6+ years building scalable web applications. Specialising in{" "}
                  <span className="text-indigo-300">programmatic video systems</span>{" "}
                  with Remotion, AI-powered automation, and cloud infrastructure on{" "}
                  <span className="text-cyan-400">AWS</span> &amp;{" "}
                  <span className="text-cyan-400">GCP</span>.{" "}
                  AWS Certified Developer. Expert in React, Next.js, Node.js,
                  Python FastAPI, RAG, and LLM integration.
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <a
                    href="#clients"
                    className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 font-semibold transition-all hover:scale-105 text-sm"
                  >
                    View Client Work
                  </a>
                  <a
                    href="https://github.com/hikmat12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-white/15 hover:border-indigo-500/50 hover:bg-white/5 font-semibold transition-all text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Stats card */}
              <div className="flex-shrink-0 w-full max-w-sm animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="glass-card rounded-2xl p-6 animate-float">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { value: "6+",   label: "Years Exp." },
                      { value: "12+",   label: "Remotion Projects" },
                      { value: "AWS",  label: "Certified" },
                      { value: "GCP",  label: "Cloud" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/5 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold gradient-text">{s.value}</div>
                        <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Remotion / Video",  pct: 95 },
                      { label: "React / Next.js",   pct: 95 },
                      { label: "AWS / Cloud",        pct: 88 },
                      { label: "AI / LLM / RAG",     pct: 82 },
                      { label: "Python FastAPI",      pct: 80 },
                    ].map((bar) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-xs text-zinc-400 mb-1">
                          <span>{bar.label}</span>
                          <span>{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                            style={{ width: `${bar.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ WHAT I DO ══ */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Services" title="What I Do" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s) => (
                <div key={s.title} className="glass-card rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{s.title}</h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ CLIENT WORK / REMOTION ══ */}
        <section id="clients" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Freelance & Client Work" title="Remotion Projects" />

            <div className="mt-14 space-y-10">
              {clientWork.map((exp, i) => (
                <article
                  key={i}
                  className="glass-card rounded-2xl overflow-hidden hover:scale-[1.003] transition-all duration-300"
                >
                  <div className="p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-3 mb-5">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
                            {exp.platform}
                          </span>
                          {exp.tags.map((t) => (
                            <span key={t} className="text-xs text-zinc-500 bg-white/5 border border-white/8 px-2.5 py-0.5 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <p className="text-sm text-zinc-500 mt-1">{exp.client} · {exp.date}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2"> 
                        {"rating" in exp && exp.rating && (
                          <span className="text-sm font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                            {exp.rating as string}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 text-base leading-relaxed mb-6">{exp.description}</p>

                    {/* Deliverables */}
                    {exp.deliverables && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {exp.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-zinc-400">
                            <span className="text-indigo-400 mt-0.5 flex-shrink-0">✓</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Client review quote */}
                    {"review" in exp && exp.review && (
                      <blockquote className="mb-6 px-5 py-4 rounded-xl bg-indigo-500/6 border-l-4 border-indigo-500/60">
                        <p className="text-zinc-300 text-sm leading-relaxed italic">"{exp.review as string}"</p>
                        <footer className="mt-2 text-xs text-indigo-400 font-medium">— Client review</footer>
                      </blockquote>
                    )}

                    {/* Code private badge */}
                    {exp.codePrivate && (
                      <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-500/8 border border-amber-500/20 text-sm text-amber-300">
                        <span className="text-base">🔒</span>
                        <span>
                          Code is private.{" "}
                          <a
                            href="mailto:hikmat@example.com"
                            className="underline hover:text-amber-200 transition-colors"
                          >
                            Request access
                          </a>{" "}
                          if you'd like to review it.
                        </span>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {exp.loomId && (
                        <a
                          href={`https://www.loom.com/share/${exp.loomId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/60 px-4 py-2 rounded-lg transition-all hover:bg-indigo-500/8"
                        >
                          🎥 Demo video
                        </a>
                      )}
                      {exp.links && exp.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 border border-indigo-500/30 hover:border-indigo-400/60 px-4 py-2 rounded-lg transition-all hover:bg-indigo-500/8"
                        >
                          {l.icon} {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ SKILLS ══ */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Tech Stack" title="Languages, Frameworks & Tools" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillGroups.map((g) => (
                <div key={g.category} className="glass-card rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">{g.icon}</span>
                    <h3 className="font-semibold text-sm text-zinc-300">{g.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((sk) => (
                      <span key={sk} className="skill-badge text-xs px-2.5 py-1 rounded-full font-mono cursor-default">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ WORK EXPERIENCE ══ */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Career" title="Work Experience" />

            <div className="mt-14 relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent hidden sm:block" />

              <div className="space-y-8">
                {workExperience.map((job, i) => (
                  <div key={i} className="sm:pl-14 relative">
                    {/* Dot */}
                    <div className="absolute left-2 top-5 hidden sm:block">
                      <div className="w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#060608]" />
                    </div>

                    <div className="glass-card rounded-2xl p-5 hover:scale-[1.005] transition-all duration-300">
                      <div className="flex flex-wrap items-start gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-white">{job.title}</h3>
                          <p className="text-indigo-400 text-sm">{job.company} · {job.location}</p>
                        </div>
                        <span className="text-xs text-zinc-500 bg-white/5 border border-white/8 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-zinc-400 text-sm leading-relaxed">{job.description}</p>
                      {job.tags && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {job.tags.map((t) => (
                            <span key={t} className="text-xs text-zinc-600 bg-white/5 px-2 py-0.5 rounded font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ PROJECTS / PORTFOLIO ══ */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Portfolio" title="Projects" />

            {/* artbase.ai featured */}
            <div className="mt-12 mb-8 glass-card rounded-2xl overflow-hidden">
              <div className="p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {["AI Studio", "Video Automation", "AWS", "Next.js"].map((t) => (
                    <span key={t} className="text-xs text-zinc-500 bg-white/5 border border-white/8 px-2.5 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Artbase.AI</h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  Full custom Remotion-based video automation platform. Users supply a
                  script and voice-over, select a template style, and receive a
                  fully-rendered MP4 — no manual editing required. Built with
                  TypeScript, React, Next.js, Node.js and deployed on AWS with a
                  dedicated render server handling concurrent exports.
                </p>
                <div className="mb-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-amber-500/8 border border-amber-500/20 text-xs text-amber-300">
                  <span className="text-base">🔒</span>
                  <span>
                    Code is private.{" "}
                    <a href="mailto:hikmat@example.com" className="underline hover:text-amber-200 transition-colors">
                      Request access
                    </a>{" "}
                    if you'd like to review it.
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-2 font-mono">▶ App walkthrough</p>
                <div className="loom-embed">
                  <iframe
                    src="https://www.loom.com/embed/76094c79219145ac96a482870654e8b3"
                    allowFullScreen
                    title="Artbase.AI walkthrough"
                  />
                </div>
              </div>
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolioProjects.map((p) => (
                <div
                  key={p.title}
                  className="glass-card rounded-2xl p-5 hover:scale-[1.03] transition-all duration-300 flex flex-col"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-mono text-zinc-600 bg-white/4 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bold text-white mb-2">{p.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed mb-4">{p.description}</p>
                  </div>
                  {p.codePrivate && (
                    <div className="mb-3 flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/8 border border-amber-500/20 text-xs text-amber-400">
                      <span>🔒</span>
                      <span>
                        Code is private —{" "}
                        <a href="mailto:hikmat@example.com" className="underline hover:text-amber-200">
                          request access
                        </a>
                      </span>
                    </div>
                  )}
                  <div className="flex gap-2 mt-auto">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs border border-indigo-500/30 hover:border-indigo-400/60 text-indigo-400 hover:text-indigo-300 px-3 py-1.5 rounded-lg transition-all"
                      >
                        Demo →
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs border border-white/10 hover:border-white/20 text-zinc-500 hover:text-zinc-300 px-3 py-1.5 rounded-lg transition-all"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://github.com/hikmat12345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/25 px-5 py-2.5 rounded-full transition-all"
              >
                View all projects on GitHub →
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ CLOUD & AI ══ */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Infrastructure & AI" title="Cloud, AI Studio & Automation" />
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {cloudCards.map((c) => (
                <div
                  key={c.title}
                  className="glass-card rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h3 className="font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.badges.map((b) => (
                      <span key={b} className="skill-badge text-xs px-2.5 py-1 rounded-full font-mono cursor-default">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ SCENE TYPES ══ */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Remotion Capabilities" title="Scene Types I Build" />
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {sceneTypes.map((s) => (
                <div
                  key={s}
                  className="glass-card rounded-xl px-4 py-3 text-sm text-zinc-300 flex items-center gap-2 hover:text-white hover:scale-105 transition-all cursor-default"
                >
                  <span className="text-indigo-400 text-base">▸</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ EDUCATION & CERT ══ */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Education & Credentials" title="Background" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Education */}
              <div className="glass-card rounded-2xl p-6">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-bold text-white mb-1">Bachelor of Computer Science</h3>
                <p className="text-indigo-400 text-sm mb-1">KUST University</p>
                <p className="text-zinc-500 text-xs mb-3">2015 – 2019</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Strong foundation in algorithms, data structures, software engineering,
                  database management and web development. Hands-on project experience
                  building scalable applications.
                </p>
              </div>

              {/* AWS Cert */}
              <div className="glass-card rounded-2xl p-6">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="font-bold text-white mb-1">AWS Certified Developer – Associate</h3>
                <p className="text-indigo-400 text-sm mb-1">Amazon Web Services</p>
                <p className="text-zinc-500 text-xs mb-3">Issued 26 Dec 2024</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Validated expertise in developing and deploying cloud-based applications
                  on AWS — Lambda, S3, EC2, CloudFront, IAM, DynamoDB, and more.
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-semibold">
                    ✓ Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider max-w-6xl mx-auto px-6" />

        {/* ══ CONTACT ══ */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-4">
              Let's build together
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Got a project in mind?
            </h2>
            <p className="text-zinc-400 mb-10 leading-relaxed max-w-xl mx-auto">
              Whether you need a Remotion video pipeline, a full-stack web app,
              AI integration, or cloud infrastructure — I'm ready to start immediately.
            </p>
            <a
              href="mailto:hikmat@example.com"
              className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 font-semibold text-white transition-all hover:scale-105 animate-pulse-glow text-sm"
            >
              Start a Conversation →
            </a>

            <div className="mt-12 flex justify-center flex-wrap gap-4 text-sm">
              {[
                { label: "GitHub",    href: "https://github.com/hikmat12345" },
                { label: "LinkedIn",  href: "#" },
                { label: "Medium",    href: "#" },
                { label: "AWS Cert",  href: "#" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-300 border border-white/8 hover:border-white/20 px-4 py-2 rounded-full transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 py-6 px-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Hikmat Ullah Khan · Senior Full-Stack Developer · Built with Next.js &amp; Tailwind CSS
        </footer>
      </div>
    </div>
  );
}

/* ─────────────── Reusable header ─────────────── */
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-mono text-indigo-400 tracking-widest uppercase mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
}

/* ─────────────── DATA ─────────────── */

const services = [
  {
    icon: "🎬",
    title: "Remotion & Video Automation",
    body: "Programmatic video systems: YAML/JSON-driven scenes, audio sync, cinematic animations, and scalable MP4 render pipelines.",
  },
  {
    icon: "⚛️",
    title: "Full-Stack Development",
    body: "End-to-end web apps with React, Next.js, Node.js, Python FastAPI. Secure, optimised, and production-grade.",
  },
  {
    icon: "☁️",
    title: "AWS & Cloud Infrastructure",
    body: "Serverless architectures, render servers, S3 pipelines, CDN delivery. AWS Certified Developer.",
  },
  {
    icon: "🤖",
    title: "AI Integration & RAG",
    body: "LLM-powered features, vector databases, RAG pipelines, ElevenLabs TTS, OpenAI, and prompt engineering.",
  },
  {
    icon: "📡",
    title: "API & Real-Time Systems",
    body: "RESTful and GraphQL APIs, WebSocket, WebRTC, Redis caching for high-throughput, low-latency services.",
  },
  {
    icon: "📊",
    title: "Data Visualisation",
    body: "Interactive dashboards with D3.js, Three.js 3D graphics, and animated chart components for Remotion.",
  },
  {
    icon: "🗄️",
    title: "Database Management",
    body: "PostgreSQL, MySQL, MongoDB, DynamoDB, Redis. Schema design, ORM integration, and performance tuning.",
  },
  {
    icon: "🎓",
    title: "Training & Mentorship",
    body: "Team training on React, Next.js, Remotion, and cloud architecture. 6+ years mentoring cross-functional teams.",
  },
];

const skillGroups = [
  {
    icon: "🎬",
    category: "Remotion & Video",
    skills: ["Remotion", "FFmpeg", "Audio Sync", "Scene YAML", "ElevenLabs", "yt-dlp"],
  },
  {
    icon: "⚛️",
    category: "Frontend",
    skills: ["React 19", "Next.js", "Angular", "Vue.js", "TypeScript", "Three.js", "D3.js", "Tailwind CSS"],
  },
  {
    icon: "🖥️",
    category: "Backend",
    skills: ["Node.js", "Express", "Nest.js", "Python FastAPI", "Django", "GraphQL", "WebSocket", "WebRTC"],
  },
  {
    icon: "🗄️",
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Redis", "Vector DBs"],
  },
  {
    icon: "☁️",
    category: "Cloud & DevOps",
    skills: ["AWS Lambda", "S3", "EC2", "CloudFront", "GCP", "Docker", "CI/CD", "Serverless"],
  },
  {
    icon: "🤖",
    category: "AI & LLM",
    skills: ["OpenAI", "RAG", "Prompt Eng.", "LLM", "AI Studio", "ElevenLabs", "TTS"],
  },
  {
    icon: "🧪",
    category: "Testing",
    skills: ["Jest", "Mocha", "Cypress"],
  },
  {
    icon: "🔧",
    category: "Tools",
    skills: ["Git", "Docker", "Vercel", "Netlify", "Heroku", "Digital Ocean"],
  },
];

const workExperience = [
  {
    title: "Senior Frontend Engineer — React.js & Python FastAPI",
    company: "TEO",
    location: "Remote",
    period: "2024 – Present",
    description:
      "Senior Full-Stack Developer specialising in React.js and Python FastAPI. Integrated AI-powered customer support systems using LLM technology, developed offline-capable chat modules, and created code review automation for Bitbucket. Building enterprise applications with vector databases, RAG implementations, and Generative AI solutions.",
    tags: ["React", "Python FastAPI", "LLM", "RAG", "Vector DB", "Bitbucket"],
  },
  {
    title: "Fullstack Developer",
    company: "Selteq IT Solution",
    location: "Islamabad",
    period: "2023 – Present",
    description:
      "Developing scalable web applications using modern JavaScript frameworks including React, Next.js, Angular, and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    tags: ["React", "Next.js", "Angular", "Node.js"],
  },
  {
    title: "Fullstack Software Engineer",
    company: "VOUS (LeadVy)",
    location: "Dubai",
    period: "2022 – 2023",
    description:
      "Developed and maintained web applications using React, Next.js, and Node.js. Implemented RESTful APIs and GraphQL endpoints for secure and efficient communication between services.",
    tags: ["React", "Next.js", "Node.js", "GraphQL", "REST API"],
  },
  {
    title: "Fullstack Software Engineer",
    company: "AIVATEK",
    location: "Islamabad",
    period: "2020 – 2022",
    description:
      "Developed and maintained web applications using React, Angular, and Node.js. Implemented secure and efficient code practices to optimise application performance.",
    tags: ["React", "Angular", "Node.js"],
  },
  {
    title: "Frontend Developer",
    company: "Cyber Peak Solution",
    location: "Rawalpindi",
    period: "2019 – 2020",
    description:
      "Developed and maintained web applications using React, Angular, and Vue.js. Collaborated with UX/UI designers to create visually appealing and user-friendly interfaces.",
    tags: ["React", "Angular", "Vue.js"],
  },
];

const clientWork = [
  {
    title: "Remotion Sales Video Proof-of-Concept",
    client: "Peter Nelson",
    platform: "Upwork",
        rating: "5.0 ★",
    date: "March 2025",
    budget: "$Paid",
    tags: ["Remotion", "YAML", "React", "MP4"],
    description:
      "Reviewed a 10-minute sales video, segmented a 2–3 minute section, and rebuilt it as a fully code-driven Remotion project. Defined every scene in a structured YAML file, built reusable scene components (Headline, Bullet List, Text + Image, Testimonial, Pricing/CTA), synced scene timing to the original audio narration, and delivered the final MP4 alongside the editable source project.",
    deliverables: [
      "YAML scene definition file",
      "Reusable Remotion scene components",
      "Audio-synced scene timing",
      "Final rendered MP4",
      "Architecture explanation",
    ],
    codePrivate: true,
    links: [
      {
        href: "https://drive.google.com/file/d/1yDgwmfSmLo6oBIyS71KLHzPdOLUS44Qy/view?usp=sharing",
        icon: "🎥",
        label: "Demo video",
      },
       {
        href: "https://www.loom.com/share/280d0930900c4252a6829d5ee4c603bd",
        icon: "🎥",
        label: "Code video",
      },
    ],
  },
  {
    title: "Programmatic Finance Video Pipeline",
    client: "Peter Nelson",
    platform: "Upwork",
        rating: "5.0 ★",
    date: "Feb–Mar 2025",
    budget: "~$3,500 scoped",
    tags: ["Remotion", "Charts", "ElevenLabs", "yt-dlp", "AWS"],
    description:
      "Scoped a full automated video pipeline for a finance/news YouTube channel targeting Business Basics-level cinematic quality. Designed architecture for dynamic JSON-driven scene composition, ElevenLabs TTS audio syncing, automatic YouTube clip search + download via yt-dlp, FFmpeg trimming, and server-side rendering. Delivered animated financial chart and news-card demos.",
    deliverables: [
      "Cinematic chart animations (line, bar, area)",
      "News card components (3 colour variants)",
      "JSON config-driven scene order",
      "ElevenLabs + manual audio upload modes",
      "YouTube clip auto-insert pipeline",
      "AWS render server architecture",
    ],
    codePrivate: true,
    loomId: null,
    links: [
      {
        href: "https://drive.google.com/file/d/1CeopzEmwtMHmC2Upbr0caLgl5M1vAkR2/view",
        icon: "🎥",
        label: "Demo video",
      },
      {
        href: "https://www.loom.com/share/92fbb23312ea47e895322f7105329521",
        icon: "🎥",
        label: "Code video",
      },
    ],
  },
    {
    title: "JSON-Driven Vertical Video Template for TikTok / Reels",
    client: "Content Site (AI Agent Case Studies)",
    platform: "Upwork",
        rating: "5.0 ★",
    date: "March 2026",
    budget: null,
    tags: ["Remotion", "Vertical Video", "TikTok", "JSON", "Spring Animations"],
    description:
      "Built a single reusable Remotion composition (1080×1920, 30 fps) that accepts a JSON props object and renders 20–40 second vertical videos automatically — turning AI agent case-study articles into premium TikTok/Reels/X content. Designed a 5-scene structure with floating cards, spring animations, scale-in effects, a counting revenue number, and big keyword emphasis moments. Brand palette: white/off-white background with orange (#f59e0b) accent.",
    deliverables: [
      "Hook scene — revenue counter + floating problem card",
      "Who scene — avatar circle, name, tool stack card",
      "Steps scene — 3–4 stacked floating cards with stagger",
      "Keyword emphasis — full-screen stat moment",
      "CTA scene — site name card with spring entry",
      "JSON props schema (builder, tools, revenue, steps, stats, url)",
      "npx remotion render --props=./post.json render script",
      "README with data-swap & render instructions",
    ],
    codePrivate: true,
    loomId: null,
     links: [
      {
        href: "https://drive.google.com/file/d/1vsoN7MGzBWFKLsahTxB0zcj1CzCVxKui/view?usp=sharing",
        icon: "🎥",
        label: "Demo video",
      },
      {
        href: "https://www.loom.com/share/918f8d74ce6d41b99951cbfd5fa5ae99",
        icon: "🎥",
        label: "Code video",
      },
    ],
  },
  {
    title: "Custom Remotion Video Automation & Editor",
    client: "Jujen (Lovable)",
    platform: "Upwork",
    date: "Feb 14 – Feb 19, 2026",
    budget: "$120 earned",
    tags: ["Remotion", "React", "Next.js", "Node.js", "AWS"],
    description:
      "Built a custom Remotion-based video automation and editor solution using React, Next.js, Node.js, and AWS. Delivered a clean, functional implementation within a tight 5-day turnaround. The client rated the collaboration 5 stars, noting clear communication, quick responses, and well-explained requirements that made the process efficient.",
    deliverables: [
      "Remotion video automation integration",
      "React + Next.js editor implementation",
      "Node.js backend & AWS deployment",
      "5-day delivery on fixed-price contract",
    ],
    rating: "5.0 ★",
    review: "It was a pleasure working together. Clear communication, quick responses, and a smooth collaboration overall. The requirements were well explained, which made the implementation process efficient.",
    codePrivate: true,
    loomId: "76094c79219145ac96a482870654e8b3",
    links: [],
  },
  {
    title: "Caption Fonts & Remotion Player Render Sync",
    client: "Jujen (Lovable)",
    platform: "Upwork",
        rating: "5.0 ★",
    date: "Early 2025",
    budget: null,
    tags: ["Remotion", "Lovable", "Captions", "Fonts"],
    description:
      "Helped a client building a video editor inside Lovable.dev implement custom caption fonts and ensure pixel-perfect render parity between the Remotion player preview and the final exported video. Resolved font-loading timing issues and caption style consistency across render modes.",
    deliverables: [
      "Custom font integration in Remotion",
      "Caption render parity (preview vs. export)",
      "Lovable project compatibility",
    ],
    codePrivate: false,
    loomId: null,
    links: [],
  },
  {
    title: "Remotion & React 5-Day Team Bootcamp",
    client: "Rockstar Na",
    platform: "Upwork",
        rating: "5.0 ★",
    date: "Aug 2025",
    budget: "$500",
    tags: ["Training", "Remotion", "React", "Next.js", "Node.js"],
    description:
      "Designed and delivered a 5-day intensive training programme for a PHP/Node team with zero React knowledge — preparing them to build a Sales Video Creator, Reels Builder, and AI Story Maker. Sessions covered core React + Next.js, full Remotion architecture, custom animation logic beyond default docs, a live Text-to-Video app build, and server-side rendering infrastructure.",
    deliverables: [
      "Phase 1: React + Next.js fundamentals (2 × 2 hr)",
      "Phase 2: Remotion deep-dive (3 × 2–3 hr)",
      "Phase 3: Live Text-to-Video app build (2 × 3 hr)",
      "Phase 4: Advanced animations & render server (2 × 1 hr)",
      "Zoom recordings for internal reference",
      "Custom animation demos beyond Remotion docs",
    ],
    codePrivate: false,
    loomId: null,
    links: [
      {
        href: "https://github.com/hikmat12345/ddm-video-generator-master",
        icon: "🐙",
        label: "Reference project",
      },
    ],
  },
  {
    title: "Remotion + Antigravity Project Setup",
    client: "YouTube Channel Owner",
    platform: "Upwork",
        rating: "5.0 ★",
    date: "Feb 2026",
    budget: null,
    tags: ["Remotion", "Antigravity", "Motion Graphics", "YouTube"],
    description:
      "Configured a Remotion project inside the Antigravity environment for a YouTube channel. Responsibilities included setting up the project environment from scratch, integrating motion graphics, establishing the scene and composition structure, and ensuring the final render output met professional broadcast standards.",
    deliverables: [
      "Remotion + Antigravity environment setup",
      "Project structure & composition configuration",
      "Motion graphics integration",
      "Professional render output validation",
    ],
    codePrivate: true,
    loomId: null,
    links: [],
  },
];

const portfolioProjects = [
  {
    title: "Veroxos",
    tags: ["AI", "Python", "Code Review"],
    description: "Expense management platform with AI-powered code review automation for Bitbucket repositories, enhancing code quality and development efficiency.",
    demo: "#",
    github: "#",
    codePrivate: false,
  },
  {
    title: "Expert Bookings Platform",
    tags: ["Next.js", "MUI"],
    description: "Full-featured expert bookings platform built with Next.js and Material UI.",
    demo: "#",
    github: "#",
    codePrivate: false,
  },
  {
    title: "Dogwood Analytic",
    tags: ["Next.js", "Python", "D3.js"],
    description: "Data analytics dashboard with interactive visualisations, customisable themes, and Next.js + Tailwind CSS frontend.",
    demo: "#",
    github: "#",
    codePrivate: false,
  },
  {
    title: "CSCS Platform",
    tags: ["Enterprise", "Next.js"],
    description: "CSCS Construction Skills Certification Scheme platform for construction industry workforce management and certification.",
    demo: "#",
    github: null,
    codePrivate: true,
  },
  {
    title: "ClinicsHub",
    tags: ["React", "Tailwind"],
    description: "Healthcare platform connecting patients with clinics, built with React and Tailwind CSS.",
    demo: "#",
    github: "#",
    codePrivate: false,
  },
  {
    title: "Plexar ERP System",
    tags: ["React", "MUI"],
    description: "Enterprise resource planning system built with React and Material UI.",
    demo: "#",
    github: "#",
    codePrivate: true,
  },
  {
    title: "Chelsford LMS",
    tags: ["Next.js", "Bootstrap"],
    description: "Learning management system built with Next.js.",
    demo: "#",
    github: null,
    codePrivate: true,
  },
  {
    title: "DDM Video Generator",
    tags: ["Remotion", "TypeScript", "TTS"],
    description: "Text-to-speech video automation platform. Turns written content into animated videos with voice narration, backgrounds, animations, and thumbnails.",
    demo: null,
    github: "https://github.com/hikmat12345/ddm-video-generator-master",
    codePrivate: false,
  },
  {
    title: "Luxury Boat Rental Platform",
    tags: ["React", "TypeScript"],
    description: "Premium boat rental booking platform with React and TypeScript.",
    demo: "#",
    github: null,
    codePrivate: false,
  },
];

const cloudCards = [
  {
    icon: "☁️",
    title: "AWS Infrastructure",
    description:
      "AWS Certified Developer. Deploy Remotion render servers on EC2, manage video assets in S3, trigger render jobs via Lambda, and stream outputs through CloudFront CDN.",
    badges: ["EC2", "S3", "Lambda", "CloudFront", "IAM", "DynamoDB", "Serverless"],
  },
  {
    icon: "🧠",
    title: "AI Studio & Pipelines",
    description:
      "Integrate ElevenLabs for TTS, OpenAI for script generation and keyword extraction, RAG with vector databases, and custom prompt engineering to automate video production.",
    badges: ["ElevenLabs", "OpenAI", "RAG", "Vector DB", "LLM", "TTS"],
  },
  {
    icon: "🌐",
    title: "GCP & Multi-Cloud",
    description:
      "Multi-cloud rendering pipelines using GCP Cloud Run for serverless render jobs, GCS for storage, and cross-cloud orchestration for high-volume programmatic video generation.",
    badges: ["Cloud Run", "GCS", "Cloud Build", "Docker", "Terraform"],
  },
];

const sceneTypes = [
  "Headline / Title",
  "Bullet List",
  "Text + Image",
  "Testimonials",
  "Pricing / CTA",
  "Animated Charts",
  "World Map Zoom",
  "News Article Card",
  "Number Reveal",
  "Portrait Overlay",
  "Framed Photo",
  "Timeline Scene",
  "Cinematic Intro",
  "Outro / End Card",
  "Lower Thirds",
  "Data Overlay",
];
