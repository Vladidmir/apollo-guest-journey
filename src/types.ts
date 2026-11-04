export type Lang = 'uk' | 'en'
export type L = { uk: string; en: string }
export type LockType = 'bracelet' | 'pin'
export type Level = 'self' | 'staff' | 'emergency'
export type ZoneCat = 'service' | 'training' | 'comfort'

export const l = (uk: string, en: string): L => ({ uk, en })

export type IconName =
  | 'home'
  | 'map'
  | 'search'
  | 'help'
  | 'door'
  | 'lock'
  | 'drop'
  | 'pin'
  | 'wifi'
  | 'dumbbell'
  | 'card'
  | 'alert'
  | 'phone'
  | 'check'
  | 'chevron'
  | 'mic'
  | 'play'
  | 'pause'
  | 'user'
  | 'wind'
  | 'heart'
  | 'box'
  | 'shirt'
  | 'star'
  | 'list'
  | 'wrench'
  | 'water'
  | 'plus'

export type Step = { title: L; text: L }

export type Club = {
  id: string
  code: string
  title: L
  city: L
  mall: L
  address: L
  phone: string
  hours: L
  hoursStaff: L
  findHint: L
  lockType: LockType
  wifiSsid: string
  hasVending: boolean
  hasKasa: boolean
  hasAccuniq: boolean
  trainer: L
  siteUrl: string
  supportUrl: string
  tour360Url: string
  mapsUrl: string
  areaM2?: number
  lockers?: number
  machines?: number
}

export type Room = {
  id: string
  x: number
  y: number
  w: number
  h: number
  find?: L
  note?: L
}

export type ZoneLink = { to: string; label: L }

export type ZoneInfo = {
  title: L
  short: L
  category: ZoneCat
  description: L
  find: L
  canDo: L
  guideId?: string
  keywords: string
  related?: ZoneLink[]
}

export type Guide = {
  id: string
  icon: IconName
  title: L
  summary: L
  seconds: number
  steps: Step[]
  mistakes: L[]
  keywords: string
  to?: string
  helpTo?: string
}

export type Branch = {
  id: string
  label: L
  lockType?: LockType
  level?: Level
  steps: Step[]
  say?: L
  prepare?: L
}

export type SituationGroup = 'things' | 'pay' | 'access' | 'gear' | 'health' | 'place'

export type Situation = {
  id: string
  icon: IconName
  title: L
  summary: L
  group: SituationGroup
  level: Level
  featured?: boolean
  keywords: string
  steps?: Step[]
  say?: L
  prepare?: L
  branches?: Branch[]
  requiresVending?: boolean
}

export type Product = {
  id: string
  clubIds: string[]
  title: L
  text: L
  price: string
  tag: L
}

export type RuleBlock = {
  id: string
  title: L
  zoneId?: string
  items: L[]
}

export type QrLink = {
  code: string
  clubId: string
  to: string
  title: L
  place: L
}

export type VisitStep = {
  id: string
  title: L
  text: L
}
