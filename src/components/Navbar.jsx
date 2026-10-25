import { useState } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#profile', label: 'Profile' },
  { href: '#weekly-labs', label: 'Weekly Labs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">J</span>
          <span>Java Lab Record</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
