export default function LudoGameWebsite() {
  const features = [
    {
      title: "Classic Ludo Fun",
      text: "Enjoy the timeless board game experience with smooth gameplay and colorful visuals.",
      icon: "🎲",
    },
    {
      title: "Play Anywhere",
      text: "Start a quick match anytime and enjoy easy controls designed for mobile players.",
      icon: "📱",
    },
    {
      title: "Fast & Smooth",
      text: "Modern UI, delightful motion, and responsive layouts for a polished experience.",
      icon: "⚡",
    },
    {
      title: "Exciting Rewards",
      text: "Keep players engaged with daily rewards, streaks, and competitive fun.",
      icon: "🏆",
    },
  ];

  const steps = [
    "Roll the dice and move your pawns strategically.",
    "Race your friends or family to reach the home zone first.",
    "Use timing and tactics to send opponents back.",
  ];

  const screenshots = [
    {
      title: "Home Screen",
      subtitle: "Clean and colorful entry point",
      image:
        "https://play-lh.googleusercontent.com/eIbnQwxg7zMpnrXqDlcbBrpimXNCOFZ3KZ5llXWmfEWeqaEs1YRDlKrxQZeNMp-iQtpjxdfXVj9_3HNe_TW_rQ=w5120-h2880-rw",
    },
    {
      title: "Gameplay",
      subtitle: "Smooth board interactions",
      image:
        "https://play-lh.googleusercontent.com/b8l6RT2mS8_j_kwr-hVuuTxvEsTquy8hDKz2vtJ5oB7XHMvoUMxJtMNa2-Lc6lw7g6OHNgfp-ALONx_0_pj7cy0=w5120-h2880-rw",
    },
    {
      title: "Rewards",
      subtitle: "Daily bonus and progression",
      image:
        "https://play-lh.googleusercontent.com/GIrZB8kVP94YRkpgKOh_Q5FQdvOPorWuaUVSX-f4jPLHi5ql0VspwSGa09ABDafD1es2gDDf2JARSZXHrV1iNSI=w5120-h2880-rw",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.25),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.2),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(34,197,94,0.18),_transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-5 py-3 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-red-500 via-yellow-400 to-green-500 flex items-center justify-center text-xl shadow-lg">
                🎲
              </div>
              <div>
                <p className="text-lg font-semibold tracking-wide">Ludo Khel</p>
                <p className="text-xs text-slate-300">Fun. Fast. Colorful.</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#how" className="hover:text-white transition">How It Works</a>
              <a href="#screens" className="hover:text-white transition">Screens</a>
              <a href="#download" className="hover:text-white transition">Download</a>
            </nav>
          </header>

          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Modern Ludo game experience
              </div>

              <div className="space-y-5">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                  Play <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 bg-clip-text text-transparent">Ludo Khel Game</span>
                  <br />
                  with a smooth and modern vibe.
                </h1>
                <p className="text-lg text-slate-300 max-w-xl leading-8">
                  A stylish website for your Ludo game with bold visuals, smooth sections, better UI/UX, and a playful gaming feel that helps users discover and download your app.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=best.app.ludo"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white text-slate-950 px-7 py-4 font-semibold shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  Download Now
                </a>
                <a
                  href="#features"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition duration-300"
                >
                  Explore Features
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-lg">
                {[
                  ["10K+", "Players"],
                  ["4.8★", "Rating"],
                  ["24/7", "Fun Time"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md shadow-lg hover:-translate-y-1 transition"
                  >
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm text-slate-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -top-8 -left-2 h-28 w-28 rounded-full bg-red-500/20 blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

              <div className="relative w-full max-w-md">
                <div className="absolute -left-8 top-16 hidden md:block rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 shadow-xl animate-bounce">
                  <p className="text-sm font-semibold">Daily Rewards</p>
                  <p className="text-xs text-slate-300">Spin and collect bonuses</p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-xl">
                  <div className="rounded-[1.6rem] bg-slate-900 border border-white/10 p-5">
                    <div className="aspect-[9/16] rounded-[1.5rem] bg-[linear-gradient(160deg,#ef4444,#f59e0b,#22c55e,#3b82f6)] p-4 flex flex-col justify-between shadow-inner">
                      <div className="flex justify-between items-center">
                        <span className="rounded-full bg-black/25 px-3 py-1 text-xs backdrop-blur">Ludo Khel</span>
                        <span className="rounded-full bg-black/25 px-3 py-1 text-xs backdrop-blur">Live Match</span>
                      </div>
                      <div className="rounded-3xl bg-black/25 p-5 backdrop-blur-md border border-white/10">
                        <div className="grid grid-cols-2 gap-3 text-center">
                          {[
                            ["🔴", "Red"],
                            ["🟡", "Yellow"],
                            ["🟢", "Green"],
                            ["🔵", "Blue"],
                          ].map(([emoji, name]) => (
                            <div key={name} className="rounded-2xl bg-white/10 p-4">
                              <div className="text-3xl">{emoji}</div>
                              <div className="text-sm mt-2">{name}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {['Home', 'Play', 'Rewards'].map((item) => (
                          <div key={item} className="rounded-2xl bg-black/25 py-3 text-center text-sm backdrop-blur-md">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-6 bottom-16 hidden md:block rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 shadow-xl animate-pulse">
                  <p className="text-sm font-semibold">Smooth Gameplay</p>
                  <p className="text-xs text-slate-300">Fast turns and rich visuals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300 mb-3">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything players love in one place</h2>
          <p className="text-slate-300 text-lg leading-8">
            Designed with a modern layout, soft gradients, smooth hover effects, and gaming-focused content blocks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:bg-white/10 transition duration-300"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="text-4xl mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-300 leading-7">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-300 mb-3">How it works</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple gameplay, exciting moments</h2>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-yellow-300 text-slate-950 font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-200 leading-7">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-500/15 to-yellow-500/15 p-7 shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Built for delight</h3>
              <p className="text-slate-300 leading-7">
                Large buttons, readable typography, smooth cards, and clean sections help users focus quickly.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/15 to-blue-500/15 p-7 shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Better conversion</h3>
              <p className="text-slate-300 leading-7">
                Clear call-to-actions and polished visuals encourage users to install and try your game.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/15 to-cyan-500/15 p-7 shadow-xl">
              <h3 className="text-2xl font-semibold mb-2">Ready to customize</h3>
              <p className="text-slate-300 leading-7">
                You can easily replace text, screenshots, app links, colors, and sections with your real content.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="screens" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-3">Preview</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Show your app beautifully</h2>
          <p className="text-slate-300 text-lg leading-8">
            These cards can be replaced with actual screenshots from your game to make the website more attractive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {screenshots.map((screen, i) => (
            <div
              key={screen.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="aspect-[9/16] rounded-[1.5rem] bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 p-4 flex items-center justify-center">
                <div className="w-full h-full rounded-[1.2rem] overflow-hidden border border-white/10 bg-slate-900">
                  <img
                    src={screen.image}
                    alt={`${screen.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-4 px-2">
                <p className="font-semibold text-lg">Screen {i + 1}</p>
                <p className="text-slate-300 text-sm mt-1">Modern presentation block for your game visuals.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="download" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/10 to-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-xl text-center relative overflow-hidden">
          <div className="absolute -top-10 left-10 h-28 w-28 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-rose-300 mb-3">Get started</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to roll the dice?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-8 mb-8">
              Download your Ludo game now and enjoy a colorful board game experience with modern gameplay and fun competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=best.app.ludo"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white text-slate-950 px-7 py-4 font-semibold shadow-xl hover:-translate-y-1 transition duration-300"
              >
                Google Play
              </a>
              <a
                href="#features"
                className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white hover:bg-white/10 hover:-translate-y-1 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            <p className="font-semibold text-white">Ludo Khel</p>
            <p className="text-sm mt-1">A fun and modern digital Ludo experience.</p>
          </div>
          <div className="flex gap-5 text-sm">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#screens" className="hover:text-white transition">Screens</a>
            <a href="#download" className="hover:text-white transition">Download</a>
          </div>
          <p className="text-sm">© 2026 Ludo Khel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
