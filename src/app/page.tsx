import { HeroScrollDemo } from "@/components/HeroScrollDemo";

export default function Home() {
  return (
    <main
      className="min-h-screen"
      style={{ background: "var(--background)" }}
    >
      {/* ─── Ambient Glow Orbs ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.09) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      {/* ─── Minimal Navbar ─── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        style={{
          height: "68px",
          background: "rgba(8,11,16,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: "#10B981",
              boxShadow: "0 0 12px #10B981",
              animation: "pulse 2.5s infinite",
            }}
          />
          <span
            className="text-white font-bold text-base tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            SM{" "}
            <span style={{ color: "#10B981" }}>//</span> NEURAL AI
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {["About", "Skills", "Projects", "Terminal", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium transition-colors"
              style={{
                color: "rgba(156,163,175,1)",
                fontFamily: "var(--font-jakarta)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#F9FAFB")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(156,163,175,1)")
              }
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Resume CTA */}
        <a
          href="../Profile.pdf"
          download="Supriya_Mohapatra_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          style={{
            background: "#10B981",
            color: "#080B10",
            fontFamily: "var(--font-jakarta)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Resume
        </a>
      </header>

      {/* ─── Hero Section with ContainerScroll Animation ─── */}
      <section
        id="hero"
        className="relative z-10"
        style={{ paddingTop: "68px" }}
      >
        <HeroScrollDemo />
      </section>

      {/* ─── Quick Info Section below the scroll card ─── */}
      <section
        id="about"
        className="relative z-10 max-w-5xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-semibold tracking-widest uppercase mb-4"
            style={{
              borderColor: "rgba(16,185,129,0.25)",
              background: "rgba(16,185,129,0.08)",
              color: "#10B981",
            }}
          >
            // 01. About &amp; Academic Profile
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Bridging Theory &amp; High-Throughput AI
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated to designing scalable, mathematically grounded AI systems
            that run reliably in production edge environments.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: "4+", label: "Flagship AI Systems", color: "#10B981" },
            { val: "99.4%", label: "Inference Precision", color: "#6366F1" },
            { val: "2025–29", label: "GIET Gunupur CSE", color: "#06B6D4" },
            { val: "120 FPS", label: "Edge Vision Speed", color: "#F59E0B" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-5 text-center transition-all hover:-translate-y-1"
              style={{
                background: "rgba(13,18,28,0.72)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="text-3xl font-extrabold mb-1"
                style={{
                  fontFamily: "var(--font-syne)",
                  color: m.color,
                }}
              >
                {m.val}
              </div>
              <div
                className="text-xs font-mono uppercase tracking-wider"
                style={{ color: "rgba(107,114,128,1)" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Projects Teaser Grid ─── */}
      <section
        id="projects"
        className="relative z-10 max-w-5xl mx-auto px-6 pb-28"
      >
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-semibold tracking-widest uppercase mb-4"
            style={{
              borderColor: "rgba(99,102,241,0.25)",
              background: "rgba(99,102,241,0.08)",
              color: "#6366F1",
            }}
          >
            // 02. Flagship AI Systems
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Architectures &amp; Research Prototypes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "NeuralVision AI",
              domain: "EDGE COMPUTER VISION",
              desc: "Real-time multi-class semantic segmentation pipeline with TensorRT INT8 quantization at 120 FPS / 14.2ms latency.",
              badge: "98.6% mAP",
              color: "#10B981",
              img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=75&fit=crop",
            },
            {
              title: "NeuroLLM Agent",
              domain: "AUTONOMOUS REASONING",
              desc: "Autonomous multi-step reasoning agent combining hybrid vector RAG, Tree-of-Thought branching, and hallucination verification.",
              badge: "99.8% RAG",
              color: "#6366F1",
              img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=75&fit=crop",
            },
            {
              title: "HealthPredict AI",
              domain: "EXPLAINABLE BIO-AI",
              desc: "Multi-modal clinical diagnostic framework with SHAP explainability across EHR, imaging, and clinical notes.",
              badge: "ROC-AUC 0.984",
              color: "#06B6D4",
              img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=75&fit=crop",
            },
            {
              title: "CyberSentinel",
              domain: "ANOMALY DETECTION",
              desc: "Deep autoencoder network packet telemetry engine detecting zero-day intrusions at 40 Gbps with sub-0.4ms mitigation.",
              badge: "40 Gbps",
              color: "#EF4444",
              img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=75&fit=crop",
            },
          ].map((proj) => (
            <div
              key={proj.title}
              className="group rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              style={{
                background: "rgba(13,18,28,0.72)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 12px 36px -10px rgba(0,0,0,0.6)",
              }}
            >
              {/* Project preview image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(13,18,28,0.9) 100%)",
                  }}
                />
                {/* Domain pill */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-mono font-semibold"
                  style={{
                    background: "rgba(8,11,16,0.85)",
                    color: proj.color,
                    border: `1px solid ${proj.color}40`,
                  }}
                >
                  {proj.domain}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {proj.title}
                  </h3>
                  <span
                    className="shrink-0 px-2 py-0.5 rounded text-xs font-mono font-semibold"
                    style={{
                      background: `${proj.color}18`,
                      color: proj.color,
                      border: `1px solid ${proj.color}35`,
                    }}
                  >
                    {proj.badge}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="relative z-10 text-center py-10 text-xs font-mono"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          color: "rgba(107,114,128,1)",
        }}
      >
        &copy; 2026 Supriya Mohapatra · B.Tech CSE (AI &amp; ML) · GIET University Gunupur
        <br />
        Built with Next.js · TypeScript · Tailwind CSS · Framer Motion · shadcn/ui
      </footer>
    </main>
  );
}
