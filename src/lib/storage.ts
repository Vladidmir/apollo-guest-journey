export type TrackEvent = {
  type: 'view' | 'rate' | 'help' | 'drop'
  id: string
  step?: number
  ts: number
}

const KEY = 'apollo-events'

export function loadEvents(): TrackEvent[] {
  try {
    const raw = localStorage.getItem(KEY)
    const parsed = raw ? (JSON.parse(raw) as TrackEvent[]) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function track(event: Omit<TrackEvent, 'ts'>): void {
  try {
    const all = loadEvents()
    all.push({ ...event, ts: Date.now() })
    localStorage.setItem(KEY, JSON.stringify(all.slice(-400)))
  } catch {
    /* private mode or full storage */
  }
}

export function clearEvents(): void {
  localStorage.removeItem(KEY)
}

export type Report = {
  id: string
  kind: 'fault' | 'lost'
  clubId: string
  place: string
  text: string
  contact: string
  about: string
  ts: number
}

const REPORTS = 'apollo-reports'

export function loadReports(): Report[] {
  try {
    const raw = localStorage.getItem(REPORTS)
    const parsed = raw ? (JSON.parse(raw) as Report[]) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveReport(report: Omit<Report, 'id' | 'ts'>): Report {
  const next: Report = {
    ...report,
    id: crypto.randomUUID?.() ?? String(Date.now()),
    ts: Date.now(),
  }
  const all = loadReports()
  all.unshift(next)
  localStorage.setItem(REPORTS, JSON.stringify(all.slice(0, 30)))
  return next
}

const VISIT = (clubId: string) => `apollo-visit-${clubId}`

export function loadVisit(clubId: string): string[] {
  try {
    const raw = localStorage.getItem(VISIT(clubId))
    const parsed = raw ? (JSON.parse(raw) as string[]) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveVisit(clubId: string, ids: string[]): void {
  localStorage.setItem(VISIT(clubId), JSON.stringify(ids))
}

const RATE = (id: string) => `apollo-rate-${id}`

export function loadRate(id: string): 'yes' | 'no' | null {
  const value = localStorage.getItem(RATE(id))
  return value === 'yes' || value === 'no' ? value : null
}

export function saveRate(id: string, value: 'yes' | 'no'): void {
  localStorage.setItem(RATE(id), value)
  track({ type: 'rate', id: `${id}:${value}` })
}
