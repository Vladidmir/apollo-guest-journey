import { useMemo, useState } from 'react'
import { eventTitle } from '../content/select'
import { clearEvents, loadEvents } from '../lib/storage'
import { useApp } from '../state'
import { useTitle } from '../components/Ui'
import { l } from '../types'

export function StatsPage() {
  const { tx, club, lang } = useApp()
  useTitle(tx(l('Статистика', 'Stats')))
  const [version, setVersion] = useState(0)
  const events = useMemo(() => loadEvents(), [version])
  const views = events.filter((event) => event.type === 'view')

  function tally(list: typeof views) {
    const map = new Map<string, number>()
    for (const event of list) map.set(event.id, (map.get(event.id) ?? 0) + 1)
    return [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6)
  }

  const top = tally(views)
  const max = top[0]?.[1] ?? 1
  const help = events.filter((event) => event.type === 'help').length
  const rates = events.filter((event) => event.type === 'rate')
  const yes = rates.filter((event) => event.id.endsWith(':yes')).length
  const no = rates.filter((event) => event.id.endsWith(':no')).length
  const drops = events.filter((event) => event.type === 'drop')

  return (
    <div className="page">
      <h1>{tx(l('Статистика на цьому телефоні', 'Stats on this phone'))}</h1>
      <p className="lead">{tx(l('Це демо аналітики для команди клубу. Дані нікуди не відправляються.', 'This is demo analytics for the club team. Nothing is sent anywhere.'))}</p>
      <div className="split">
        <article className="stat"><strong>{views.length}</strong><span className="muted">{tx(l('переглядів', 'views'))}</span></article>
        <article className="stat"><strong>{help}</strong><span className="muted">{tx(l('натискань «допомога»', 'help taps'))}</span></article>
      </div>
      <article className="stat">
        <strong>{tx(l('Оцінки інструкцій', 'Guide ratings'))}</strong>
        <p>{tx(l('Допомогло', 'Helped'))}: {yes} · {tx(l('Ні', 'No'))}: {no}</p>
      </article>
      <h2>{tx(l('Що відкривають найчастіше', 'What people open most'))}</h2>
      {top.length === 0 && <p className="empty">{tx(l('Походи застосунком — тут з’являться перегляди.', 'Use the app and views will show up here.'))}</p>}
      <div className="stack">
        {top.map(([id, count]) => (
          <article key={id} className="stat">
            <div className="stat-top"><span>{eventTitle(id, club, lang)}</span><span>{count}</span></div>
            <div className="meter"><span style={{ width: `${(count / max) * 100}%` }} /></div>
          </article>
        ))}
      </div>
      <h2>{tx(l('На якому кроці зупиняються', 'Where people stop'))}</h2>
      <p className="muted">{tx(l('Середній останній крок інструкції на цьому пристрої.', 'Average last step of a guide on this device.'))}</p>
      <div className="stack">
        {[...new Set(drops.map((event) => event.id))].map((id) => {
          const rows = drops.filter((event) => event.id === id)
          const avg = rows.reduce((sum, event) => sum + (event.step ?? 0), 0) / rows.length
          return (
            <article key={id} className="stat">
              <strong>{eventTitle(id.replace('guide:', 'guide:'), club, lang)}</strong>
              <p className="muted">{avg.toFixed(1)} · {rows.length}</p>
            </article>
          )
        })}
      </div>
      <button
        type="button"
        className="btn ghost"
        onClick={() => {
          clearEvents()
          setVersion((value) => value + 1)
        }}
      >
        {tx(l('Очистити демо-статистику', 'Clear demo stats'))}
      </button>
    </div>
  )
}
