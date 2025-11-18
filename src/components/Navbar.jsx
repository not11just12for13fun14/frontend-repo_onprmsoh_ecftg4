import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PhoneCall } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/training', label: 'Training' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-5 py-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/flame-icon.svg" alt="ITD" className="h-8 w-8" />
              <span className="text-white font-semibold tracking-tight">ITD Food Safety</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+18001234567" className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                <PhoneCall className="h-4 w-4" />
                <span className="text-sm font-semibold">Call Us</span>
              </a>
            </div>

            <button onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="h-10 w-10 inline-flex items-center justify-center rounded-lg bg-white/10 text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-white/15 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <a href="tel:+18001234567" className="mt-6 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg w-full justify-center">
              <PhoneCall className="h-4 w-4" />
              <span className="text-sm font-semibold">Call Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
