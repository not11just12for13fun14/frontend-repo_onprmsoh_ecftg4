import { motion } from 'framer-motion'
import { ShieldCheck, GraduationCap, ReceiptPercent, ThermometerSun, Utensils, ClipboardList } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Compliance Made Easy',
    desc: 'Guided tools and checklists that map to FDA Food Code and local regulations.'
  },
  {
    icon: GraduationCap,
    title: 'On‑Site & Online Training',
    desc: 'Interactive courses for managers and staff with certifications that matter.'
  },
  {
    icon: ThermometerSun,
    title: 'Temperature Monitoring',
    desc: 'Digitize logs and get alerts before issues become violations.'
  },
  {
    icon: ClipboardList,
    title: 'Digital HACCP',
    desc: 'Create, track, and audit workflows across locations from one dashboard.'
  },
  {
    icon: Utensils,
    title: 'Restaurant Ready',
    desc: 'From QSR to hospitality, we tailor to your kitchen and team size.'
  },
  {
    icon: ReceiptPercent,
    title: 'Lower Cost of Risk',
    desc: 'Reduce incidents, labor, and waste with proactive systems.'
  }
]

export default function Features() {
  return (
    <section id="solutions" className="relative py-24 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Solutions that scale with your operations</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">A modern platform plus hands‑on expertise to keep your food program safe and inspection‑ready.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden hover:border-white/20"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20 transition" />
              <f.icon className="h-8 w-8 text-white/90" />
              <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
