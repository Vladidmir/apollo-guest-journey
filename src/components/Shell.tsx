import { useEffect, useRef } from 'react'
import { Link, NavLink, Navigate, Outlet, useLocation } from 'react-router-dom'
import { useApp } from '../state'
import { l } from '../types'
import { Icon } from './Icon'

const links = [
  { to: '/', icon: 'home' as const, label: l('Головна', 'Home'), end: true },
  { to: '/tour', icon: 'map' as const, label: l('Карта', 'Map'), end: false },
  { to: '/situations', icon: 'help' as const, label: l('Допомога', 'Help'), end: false },
  { to: '/search', icon: 'search' as const, label: l('Пошук', 'Search'), end: false },
]

export function Shell() {
  const { tx, club, picked } = useApp()
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const allow = pathname === '/club' || pathname.startsWith('/q/')

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="shell">
      <a className="skip" href="#content">
        {tx(l('До вмісту', 'Skip to content'))}
      </a>
      <header className="topbar">
        <Link to="/" className="brand" aria-label="APOLLO NEXT">
          <img className="brand-logo" src="/brand/apollo-next-logo.png" alt="APOLLO NEXT" />
        </Link>
        <Link to="/club" className="club-chip">
          {picked ? `NEXT ${club.code}` : tx(l('Обери клуб', 'Choose a club'))}
        </Link>
        <LangToggle />
      </header>
      <main id="content" ref={mainRef} className="main">
        {!picked && !allow ? <Navigate to="/club" replace /> : <Outlet />}
      </main>
      <nav className="nav" aria-label={tx(l('Розділи', 'Sections'))}>
        {links.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'on' : undefined)}>
            <Icon name={item.icon} size={20} />
            {tx(item.label)}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

function LangToggle() {
  const { lang, setLang } = useApp()
  const next = lang === 'uk' ? 'en' : 'uk'
  return (
    <button type="button" className="lang-btn" onClick={() => setLang(next)} aria-label={next === 'en' ? 'English' : 'Українська'}>
      {next === 'en' ? 'EN' : 'UA'}
    </button>
  )
}
