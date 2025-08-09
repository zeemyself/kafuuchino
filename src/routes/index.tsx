import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      return 'Hello from TanStack Query!'
    }
  })

  return (
    <div>
      {/* Hero - Kafuu Chino vibe */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-sky-50 via-indigo-50 to-pink-50 shadow-xl mt-2">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage:
            'radial-gradient(1200px 400px at 10% -10%, rgba(99,102,241,0.08), transparent), radial-gradient(800px 300px at 90% 0%, rgba(14,165,233,0.08), transparent), radial-gradient(600px 200px at 50% 110%, rgba(236,72,153,0.08), transparent)'
        }} />

        <div className="relative z-10 px-8 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold text-indigo-700 border border-white/60 shadow-sm">
            <span>✨</span>
            <span>kawaii mode</span>
            <span>・かわいい</span>
          </div>

          <h1 className="mt-5 text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Kafuu Chino
          </h1>
          <p className="mt-4 text-lg md:text-xl text-indigo-700/80 max-w-3xl mx-auto leading-relaxed">
            A soft, pastel anime-themed React app with TanStack Router/Query and Tailwind — cozy café vibes, floating sparkles, and cute UI.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/hueforge"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-pink-400 text-white font-semibold shadow hover:brightness-105 transition">
              <span>🍮</span>
              <span>Hueforge Helper</span>
            </Link>
            <Link
              to="/td-test"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 text-indigo-700 font-semibold border border-indigo-200 shadow hover:bg-white transition">
              <span>🐰</span>
              <span>Filament TD Table</span>
            </Link>
          </div>
        </div>

        {/* Decorative floaties (kept within bounds) */}
        <span className="pointer-events-none absolute left-2 top-8 h-28 w-28 rounded-full bg-sky-300/20 blur-2xl floaty" />
        <span className="pointer-events-none absolute right-6 bottom-4 h-32 w-32 rounded-full bg-pink-300/20 blur-2xl floaty-slow" />
        <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-6 h-20 w-20 rounded-full bg-indigo-300/20 blur-2xl floaty-slower" />
      </section>

      {/* Live Demo (TanStack Query) */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-indigo-900 text-center mb-6">Live Demo</h2>
            <div className="space-y-4">
              {isLoading && (
                <div className="flex items-center justify-center p-6">
                  <div className="flex items-center gap-3 text-indigo-700">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
                    <p className="font-medium">Brewing something cute...</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 text-rose-800">
                    <span>💢</span>
                    <p className="font-medium">Error: {error.message}</p>
                  </div>
                </div>
              )}

              {data && (
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 text-emerald-900">
                    <span>✅</span>
                    <p className="font-medium text-lg">{data}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature vibes */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-indigo-900 mb-10">Cozy Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur rounded-xl border border-indigo-100 shadow hover:shadow-md transition p-6">
              <div className="w-12 h-12 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">⭐</div>
              <h4 className="text-lg font-semibold text-indigo-900 mb-1">Pastel UI</h4>
              <p className="text-indigo-700/80 text-sm">Soft gradients, gentle shadows, and kawaii accents.</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl border border-indigo-100 shadow hover:shadow-md transition p-6">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">☕</div>
              <h4 className="text-lg font-semibold text-indigo-900 mb-1">Café Tools</h4>
              <p className="text-indigo-700/80 text-sm">Hueforge helper and a Filament TD table.</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl border border-indigo-100 shadow hover:shadow-md transition p-6">
              <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center mb-3">🐇</div>
              <h4 className="text-lg font-semibold text-indigo-900 mb-1">Snappy & Type Safe</h4>
              <p className="text-indigo-700/80 text-sm">React 19, TanStack Router/Query, and TypeScript.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 