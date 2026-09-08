import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/hero.jpg";
import cvAsset from "../assets/Palesa_Fusi_CV.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Palesa Angela Fusi — Biological Sciences" },
      {
        name: "description",
        content:
          "Portfolio of Palesa Angela Fusi, a BSc Biological Sciences student at the University of the Witwatersrand.",
      },
      { property: "og:title", content: "Palesa Angela Fusi — Biological Sciences" },
      {
        property: "og:description",
        content:
          "BSc Biological Sciences student at the University of the Witwatersrand. Research, laboratory work, and human health.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-ink font-sans text-slate-100 antialiased selection:bg-accent-cyan selection:text-ink">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-sm font-bold tracking-tight">
            PAF<span className="text-accent-cyan">.</span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 sm:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#education" className="transition hover:text-white">Education</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a
            href="#cv"
            className="rounded-full bg-accent-cyan px-4 py-1.5 font-display text-xs font-bold text-ink transition hover:bg-accent-lime"
          >
            CV
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px,transparent 1px),linear-gradient(90deg,#22d3ee 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            transform: "perspective(600px) rotateX(14deg) translateY(-20px)",
          }}
        />
        <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-[520px] w-[280px] -translate-y-1/2 rotate-12 skew-x-[-12deg] bg-accent-cyan/10 lg:block" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex -rotate-2 items-center gap-2 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent-cyan" />
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                Open to research &amp; lab roles
              </span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl">
              Palesa
              <br />
              Angela <span className="text-accent-cyan">Fusi</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
              Biological Sciences student with a strong interest in biological
              research, laboratory work, and human health. Eager to apply
              academic knowledge in practical settings while sharpening
              technical and analytical skills.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-accent-cyan px-6 py-3 font-display text-sm font-bold text-ink transition hover:bg-accent-lime"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 font-display text-sm font-semibold text-white transition hover:border-white/50"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface outline outline-1 -outline-offset-1 outline-white/10">
              <img
                src={heroImage}
                alt="Palesa Angela Fusi in a laboratory setting"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-12"
      >
        <div className="lg:col-span-4">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
            About me
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
            Curious, hands-on, and health-focused.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <p className="text-lg leading-relaxed text-slate-300">
            I am a BSc Biological Sciences student at the University of the
            Witwatersrand. My studies build knowledge through laboratory
            practicals, scientific research, and analytical coursework. I enjoy
            learning, solving problems, working with others, and exploring how
            biological science connects to human health.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            My goal is to keep developing practical and analytical skills while
            gaining exposure to biological research, laboratory environments,
            and human health — especially roles where I can learn and contribute
            as I build my professional foundation.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-y border-white/10 bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
            Skills
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight">
            Technical &amp; soft capabilities
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Computer literacy
            </span>
            <span className="rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan">
              Data analysis
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Microsoft Word
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Microsoft Excel
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Scientific coursework
            </span>
            <span className="rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan">
              Laboratory practicals
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Teamwork &amp; collaboration
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Critical thinking
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Problem solving
            </span>
            <span className="rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan">
              Quick learner
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Continuous learning
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
              Verbal &amp; written communication
            </span>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
              Projects &amp; research
            </h2>
          </div>
          <span className="font-display text-sm text-slate-500">03 studies</span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="group flex flex-col rounded-2xl border border-white/10 bg-surface/50 p-6 transition hover:border-accent-cyan/50">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-accent-cyan">
              01
            </span>
            <h3 className="mt-4 font-display text-xl font-bold leading-tight">
              Biological Sciences Research Brief
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              A structured scientific research brief bringing together
              background, key findings, analysis, and a concise conclusion in a
              professional document format.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                Microsoft Word
              </span>
              <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                Research writing
              </span>
            </div>
          </article>

          <article className="group flex flex-col rounded-2xl border border-white/10 bg-surface/50 p-6 transition hover:border-accent-cyan/50">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-accent-cyan">
              02
            </span>
            <h3 className="mt-4 font-display text-xl font-bold leading-tight">
              Biological Dataset Analysis
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              A student-focused analysis of a biological dataset, documenting
              how data is organised, interpreted and communicated with
              analytical thinking and clarity.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                Microsoft Excel
              </span>
              <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                Data analysis
              </span>
            </div>
          </article>

          <article className="group flex flex-col rounded-2xl border border-white/10 bg-surface/50 p-6 transition hover:border-accent-cyan/50">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-accent-cyan">
              03
            </span>
            <h3 className="mt-4 font-display text-xl font-bold leading-tight">
              Environmental Case Study
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
              An academic case study on an environmental science question,
              emphasising research, evidence-based thinking, and clear
              communication of concepts.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                Academic writing
              </span>
              <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                Evidence-based
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
            Experience
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight">
            Vacation work
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-surface/50 p-6 transition hover:border-accent-cyan/50">
              <p className="font-display text-sm font-semibold text-accent-cyan">
                Dec 2025 — Jan 2026
              </p>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight">
                Vacation Work Assistant
              </h3>
              <p className="text-sm text-slate-400">P&amp;D Cleaning Services</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Managed specialised equipment to keep day-to-day services
                running smoothly. Worked closely with clients, handling
                enquiries and service requests through to full satisfaction.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  Client service
                </span>
                <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  Equipment handling
                </span>
              </div>
            </article>

            <article className="rounded-2xl border border-white/10 bg-surface/50 p-6 transition hover:border-accent-cyan/50">
              <p className="font-display text-sm font-semibold text-accent-cyan">
                Dec 2024 — Jan 2025
              </p>
              <h3 className="mt-2 font-display text-xl font-bold leading-tight">
                Vacation Work Assistant
              </h3>
              <p className="text-sm text-slate-400">
                Cat Computers Internet Café
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Supported customers in a fast-paced public computing
                environment with digital and administrative services. Used
                Microsoft Word and Excel for document creation, formatting and
                data management, while overseeing high-volume printing,
                scanning and electronic document distribution.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  Microsoft Word
                </span>
                <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  Microsoft Excel
                </span>
                <span className="rounded bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                  Customer support
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EDUCATION + CERTS */}
      <section id="education" className="border-t border-white/10 bg-surface/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
              Education
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
              Wits &amp; beyond
            </h2>
            <div className="mt-8 space-y-6 border-l border-white/15 pl-6">
              <div className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-accent-cyan" />
                <p className="font-display text-sm font-semibold text-accent-cyan">
                  2025 — Present
                </p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  BSc Biological Sciences
                </h3>
                <p className="text-sm text-slate-400">
                  University of the Witwatersrand · Second year — laboratory
                  practicals, scientific research, and analytical coursework
                  including chemistry.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-white/30" />
                <p className="font-display text-sm font-semibold text-slate-400">
                  2024
                </p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  National Senior Certificate
                </h3>
                <p className="text-sm text-slate-400">
                  Sunward Park High School · Passed 8 subjects including
                  Mathematics, English, Afrikaans, Physical Sciences, Life
                  Sciences &amp; Geography.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
              Certifications
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
              Achievements
            </h2>
            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-white/10 bg-ink/40 p-5">
                <h3 className="font-display font-semibold">
                  Academic Excellence Awards
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  Certificates for sustained good academic results throughout
                  schooling.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-ink/40 p-5">
                <h3 className="font-display font-semibold">
                  Leadership &amp; Outreach
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  High school counselling and outreach, plus three consecutive
                  years serving as a Representative Council of Learners member.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="relative overflow-hidden border-t border-white/10">
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent-cyan/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent-cyan">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-accent-cyan">scientific.</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:Palesafusi396@gmail.com"
              className="rounded-2xl border border-white/10 bg-surface/50 p-5 transition hover:border-accent-cyan/50"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Email
              </p>
              <p className="mt-2 break-words font-display font-semibold">
                Palesafusi396@gmail.com
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/palesa-fusi-4b41161ba"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-surface/50 p-5 transition hover:border-accent-cyan/50"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500">
                LinkedIn
              </p>
              <p className="mt-2 break-words font-display font-semibold">
                /palesa-fusi-4b41161ba
              </p>
            </a>
            <a
              href="#"
              title="GitHub URL to be added"
              className="rounded-2xl border border-white/10 bg-surface/50 p-5 transition hover:border-accent-cyan/50"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500">
                GitHub
              </p>
              <p className="mt-2 font-display font-semibold">@palesafusi</p>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
            <p className="text-sm text-slate-500">
              © 2025 Palesa Angela Fusi · Biological Sciences
            </p>
            <a
              id="cv"
              href={cvAsset.url}
              download="Palesa_Fusi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-6 py-3 font-display text-sm font-bold text-accent-cyan transition hover:bg-accent-cyan hover:text-ink"
            >
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
