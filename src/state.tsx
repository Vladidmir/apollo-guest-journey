import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { clubs } from './content/clubs'
import type { Club, L, Lang } from './types'

type AppValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  tx: (value: L) => string
  club: Club
  picked: boolean
  setClubId: (id: string) => void
}

const AppContext = createContext<AppValue | null>(null)
const CLUB_KEY = 'apollo-club'
const LANG_KEY = 'apollo-lang'

function readClub(): string | null {
  const fromQuery = new URLSearchParams(window.location.search).get('club')
  if (fromQuery && clubs.some((club) => club.id === fromQuery)) {
    localStorage.setItem(CLUB_KEY, fromQuery)
    return fromQuery
  }
  const stored = localStorage.getItem(CLUB_KEY)
  return stored && clubs.some((club) => club.id === stored) ? stored : null
}

export function AppState({ children }: { children: ReactNode }) {
  const [clubId, setClubIdState] = useState<string | null>(readClub)
  const [lang, setLangState] = useState<Lang>(() => (localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'uk'))

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<AppValue>(() => {
    const picked = Boolean(clubId && clubs.some((club) => club.id === clubId))
    const club = clubs.find((item) => item.id === clubId) ?? clubs[0]
    return {
      lang,
      setLang: (next) => {
        localStorage.setItem(LANG_KEY, next)
        setLangState(next)
      },
      tx: (item) => item[lang],
      club,
      picked,
      setClubId: (id) => {
        localStorage.setItem(CLUB_KEY, id)
        setClubIdState(id)
      },
    }
  }, [clubId, lang])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppValue {
  const value = useContext(AppContext)
  if (!value) throw new Error('useApp must be used inside AppState')
  return value
}
