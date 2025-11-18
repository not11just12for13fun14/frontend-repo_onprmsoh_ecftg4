import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

let SplineComp = null

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [splineOk, setSplineOk] = useState(true)

  useEffect(() => {
    setMounted(true)
    // Dynamically import Spline only on client to avoid any runtime issues
    import('@splinetool/react-spline')
      .then((mod) => {
        SplineComp = mod.default
        setSplineOk(true)
      })
      .catch(() => {
        setSplineOk(false)
      })
  }, [])

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-slate-950">
      {/* 3D Spline background (only when client + loaded) */}
      <div className="absolute inset-0">
        {mounted && splineOk && SplineComp ? (
          <SplineComp
            scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          // Fallback gradient background so content is visible even if Spline fails
          <div className="w-full h-full bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.35),transparent)]" />
        )}
      </div>

      {/* Gradient overlay for contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Certified food safety experts
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Food Safety Simplified for Modern Kitchens
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            Trusted solutions, training, and tools that help teams meet regulations and serve safe food with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#solutions" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition">Explore Solutions</a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white font-semibold transition">Talk to an Expert</a>
          </div>
        </motion.div>
      </div>

      {/* Parallax floating shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 right-10 h-24 w-24 rounded-2xl bg-gradient-to-br from-amber-500 to-pink-500 blur-2xl opacity-40"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-24 left-10 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-2xl opacity-40"
      />
    </section>
  )
}
