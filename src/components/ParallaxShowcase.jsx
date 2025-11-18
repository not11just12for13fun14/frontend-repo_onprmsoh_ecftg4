import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ParallaxShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={ref} className="relative bg-slate-950 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Beautifully animated. Surprisingly simple.</h2>
            <p className="mt-3 text-white/70">We bring enterprise‑grade safety to every kitchen with approachable, well‑designed tools and clear training. Motion helps your team see what matters first.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-white/80">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Live temperature logs</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Manager dashboards</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Multi‑site oversight</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">Inspection prep</div>
            </div>
          </div>
          <div className="relative h-[420px]">
            <motion.img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop" alt="Kitchen" className="absolute left-6 top-0 w-[70%] rounded-2xl border border-white/10 shadow-2xl" style={{ y: y1 }} />
            <motion.img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=1200&auto=format&fit=crop" alt="Training" className="absolute right-0 bottom-0 w-[70%] rounded-2xl border border-white/10 shadow-2xl" style={{ y: y2 }} />
          </div>
        </div>
      </div>
    </section>
  )
}
