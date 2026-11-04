import type { Club, L, Lang, Room, Situation, ZoneInfo } from '../types'
import { hasZone, layoutOf } from './clubs'
import { getGuide, getGuides } from './guides'
import { productsFor } from './products'
import { rules } from './rules'
import { situations } from './situations'
import { trainingEventTitle, trainingSearch } from './training'
import { zoneInfo } from './zones'

export type PlacedZone = ZoneInfo & Room

export function placedZones(clubId: string): PlacedZone[] {
  return layoutOf(clubId).flatMap((room) => {
    const info = zoneInfo[room.id]
    if (!info) return []
    return [{ ...info, ...room, find: room.find ?? info.find }]
  })
}

export function getZone(clubId: string, id: string): PlacedZone | undefined {
  return placedZones(clubId).find((zone) => zone.id === id)
}

export function guideHref(guideId?: string): string | null {
  if (!guideId) return null
  if (guideId === 'vending') return '/vending'
  return `/guides/${guideId}`
}

export function situationsFor(club: Club): Situation[] {
  return situations.filter((item) => situationAvailable(club, item))
}

export function getSituation(id: string): Situation | undefined {
  return situations.find((item) => item.id === id)
}

export function situationAvailable(club: Club, item: Situation): boolean {
  if (item.requiresVending && !club.hasVending) return false
  return true
}

export type SearchHit = {
  kind: 'zone' | 'guide' | 'situation' | 'rule' | 'product' | 'training'
  title: string
  text: string
  to: string
}

function hay(parts: string[]): string {
  return parts.join(' ').toLowerCase()
}

export function searchAll(club: Club, query: string, lang: Lang): SearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const hits: SearchHit[] = []

  for (const zone of placedZones(club.id)) {
    const blob = hay([zone.title.uk, zone.title.en, zone.find.uk, zone.find.en, zone.keywords])
    if (blob.includes(q)) {
      hits.push({
        kind: 'zone',
        title: zone.title[lang],
        text: zone.find[lang],
        to: `/zones/${zone.id}`,
      })
    }
  }

  for (const guide of getGuides(club)) {
    const blob = hay([guide.title.uk, guide.title.en, guide.summary.uk, guide.summary.en, guide.keywords])
    if (blob.includes(q)) {
      hits.push({
        kind: 'guide',
        title: guide.title[lang],
        text: guide.summary[lang],
        to: guide.to ?? `/guides/${guide.id}`,
      })
    }
  }

  for (const item of situationsFor(club)) {
    const blob = hay([item.title.uk, item.title.en, item.summary.uk, item.summary.en, item.keywords])
    if (blob.includes(q)) {
      hits.push({
        kind: 'situation',
        title: item.title[lang],
        text: item.summary[lang],
        to: `/situations/${item.id}`,
      })
    }
  }

  for (const block of rules) {
    if (block.zoneId && !hasZone(club.id, block.zoneId)) continue
    const blob = hay([block.title.uk, block.title.en, ...block.items.flatMap((item) => [item.uk, item.en])])
    if (blob.includes(q)) {
      hits.push({
        kind: 'rule',
        title: block.title[lang],
        text: block.items[0][lang],
        to: `/rules#${block.id}`,
      })
    }
  }

  for (const item of trainingSearch) {
    const blob = hay([item.title.uk, item.title.en, item.text.uk, item.text.en, item.keywords])
    if (blob.includes(q)) {
      hits.push({
        kind: 'training',
        title: item.title[lang],
        text: item.text[lang],
        to: item.to,
      })
    }
  }

  for (const product of productsFor(club.id)) {
    const blob = hay([product.title.uk, product.title.en, product.text.uk, product.text.en, product.tag.uk, product.tag.en])
    if (blob.includes(q)) {
      hits.push({
        kind: 'product',
        title: product.title[lang],
        text: product.text[lang],
        to: '/vending#products',
      })
    }
  }

  return hits.slice(0, 20)
}

export function eventTitle(raw: string, club: Club, lang: Lang): string {
  const [kind, id] = raw.includes(':') ? (raw.split(':') as [string, string]) : ['page', raw]
  if (kind === 'guide') return getGuide(club, id)?.title[lang] ?? id
  if (kind === 'situation') return getSituation(id)?.title[lang] ?? id
  if (kind === 'zone') return zoneInfo[id]?.title[lang] ?? id
  if (raw === 'training' || raw.startsWith('training:')) return trainingEventTitle(raw, lang) ?? raw
  const pages: Record<string, L> = {
    home: { uk: 'Головна', en: 'Home' },
    tour: { uk: 'Карта', en: 'Map' },
    vending: { uk: 'Вендинг', en: 'Vending' },
    guides: { uk: 'Інструкції', en: 'Guides' },
    situations: { uk: 'Ситуації', en: 'Situations' },
    help: { uk: 'Допомога', en: 'Help' },
    search: { uk: 'Пошук', en: 'Search' },
    training: { uk: 'Тренування', en: 'Training' },
  }
  return pages[id]?.[lang] ?? raw
}

export { getGuide, getGuides, productsFor }
