import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white">Ready to level up food safety?</h3>
              <p className="mt-2 text-white/70">Tell us about your operation and we’ll recommend the right mix of training, tools, and services.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">Email Us</a>
                <a href="tel:+18001234567" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white font-semibold transition">Call</a>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input className="w-full rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder-white/40" placeholder="Full name" />
              <input type="email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder-white/40" placeholder="Work email" />
              <input className="w-full rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder-white/40" placeholder="Company" />
              <textarea rows="4" className="w-full rounded-xl bg-slate-900/60 border border-white/10 p-3 text-white placeholder-white/40" placeholder="What are you looking to improve?" />
              <button className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition">
                Request Consultation
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
