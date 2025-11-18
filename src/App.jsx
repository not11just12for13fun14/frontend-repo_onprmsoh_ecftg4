import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ParallaxShowcase from './components/ParallaxShowcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <ParallaxShowcase />
      <CTA />
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} ITD Food Safety. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="/test" className="hover:text-white">System Test</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
